// ---------------------------------------------------------------------------
// Camada de acesso à API REST do WordPress (modo headless).
// O WP é usado somente para publicar; a renderização acontece aqui no React.
// ---------------------------------------------------------------------------

const PRIMARY = (import.meta.env.VITE_WP_API_URL ?? '').replace(/\/+$/, '')
const FALLBACK = (import.meta.env.VITE_WP_API_FALLBACK_URL ?? '').replace(/\/+$/, '')
const BASES = [PRIMARY, FALLBACK].filter((base) => /^https?:\/\//.test(base))

export const isWpConfigured = BASES.length > 0

export interface WPTerm {
  name: string
  slug: string
  taxonomy?: string
}

export interface WPMedia {
  source_url: string
  alt_text?: string
  media_details?: {
    sizes?: Record<string, { source_url: string; width: number; height: number }>
  }
}

export interface WPPost {
  id: number
  date: string
  modified: string
  slug: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
    'wp:term'?: WPTerm[][]
  }
}

interface ApiResult<T> {
  data: T
  totalPages: number
  total: number
}

async function request<T>(path: string): Promise<ApiResult<T>> {
  let lastError: unknown = new Error('Nenhuma URL do WordPress configurada')
  for (const base of BASES) {
    try {
      const response = await fetch(`${base}/wp-json/wp/v2${path}`, {
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(`WordPress API respondeu ${response.status}`)
      return {
        data: (await response.json()) as T,
        totalPages: Number(response.headers.get('X-WP-TotalPages') ?? 1),
        total: Number(response.headers.get('X-WP-Total') ?? 0),
      }
    } catch (error) {
      // Tenta a próxima URL (útil enquanto o DNS do domínio próprio não propaga).
      lastError = error
    }
  }
  throw lastError
}

export function fetchPosts({
  page = 1,
  perPage = 9,
  search = '',
}: { page?: number; perPage?: number; search?: string } = {}) {
  const params = new URLSearchParams({
    _embed: '1',
    per_page: String(perPage),
    page: String(page),
    orderby: 'date',
    order: 'desc',
  })
  if (search.trim()) params.set('search', search.trim())
  return request<WPPost[]>(`/posts?${params.toString()}`)
}

export function fetchPost(slug: string) {
  const params = new URLSearchParams({ slug, _embed: '1' })
  return request<WPPost[]>(`/posts?${params.toString()}`)
}

/** Decodifica entidades HTML vindas do WordPress (&#8217;, &amp; etc.). */
export function decodeHtml(html: string) {
  const el = document.createElement('textarea')
  el.innerHTML = html
  return el.value
}

/** Texto puro, sem tags — usado em títulos, resumos e metadados. */
export function plainText(html: string) {
  return decodeHtml(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}

export function coverImage(post: WPPost, size = 'large') {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  if (!media) return null
  return media.media_details?.sizes?.[size]?.source_url ?? media.source_url
}

export function postCategories(post: WPPost) {
  return (post._embedded?.['wp:term'] ?? [])
    .flat()
    .filter((term) => term.taxonomy !== 'post_tag')
    .slice(0, 2)
    .map((term) => term.name)
}
