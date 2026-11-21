import { useEffect, useState, type ReactNode } from 'react'
import { ArrowRight, RefreshCw, Search } from 'lucide-react'
import { blog, doctor } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { Monogram } from '../components/Logo'
import { useReveal } from '../components/useReveal'
import {
  coverImage,
  fetchPosts,
  formatDate,
  isWpConfigured,
  plainText,
  postCategories,
  type WPPost,
} from '../blog/api'
import { setSeo } from '../lib/seo'

type Status = 'loading' | 'ready' | 'empty' | 'error'

function CardImage({ post, className = '' }: { post: WPPost; className?: string }) {
  const image = coverImage(post)
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  return (
    <div className={`relative overflow-hidden bg-deep-900 ${className}`}>
      {image ? (
        <img
          src={image}
          alt={media?.alt_text || plainText(post.title.rendered)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-deep-800 to-deep-950">
          <span className="select-none font-display text-6xl text-paper/10">AG</span>
        </div>
      )}
      <div className="pointer-events-none absolute bottom-3 right-3 text-deep-950/35">
        <Monogram size={64} variant="outline" />
      </div>
    </div>
  )
}

function FeaturedCard({ post }: { post: WPPost }) {
  const categories = postCategories(post)
  const href = `/blog/${post.slug}`
  return (
    <article className="reveal overflow-hidden rounded-2xl border border-line bg-paper">
      <div className="grid lg:grid-cols-2">
        <a href={href} className="group block aspect-[16/10] lg:aspect-auto lg:h-full" tabIndex={-1} aria-hidden="true">
          <CardImage post={post} className="h-full" />
        </a>
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-bronze-600">
            {categories[0] && <span>{categories[0]}</span>}
            <span className="h-1 w-1 rounded-full bg-bronze-300" aria-hidden="true" />
            <time dateTime={post.date} className="text-slate-warm">
              {formatDate(post.date)}
            </time>
          </div>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-deep-950 sm:text-3xl">
            <a href={href} className="transition-colors duration-200 hover:text-bronze-600">
              {plainText(post.title.rendered)}
            </a>
          </h2>
          <p className="mt-4 leading-relaxed text-graphite">{plainText(post.excerpt.rendered)}</p>
          <a
            href={href}
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-deep-900 px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-950"
          >
            Ler artigo
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}

function PostCard({ post }: { post: WPPost }) {
  const categories = postCategories(post)
  const href = `/blog/${post.slug}`
  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-xl border border-line bg-paper transition-colors duration-300 hover:border-bronze-300">
      <a href={href} className="block aspect-[16/10]" tabIndex={-1} aria-hidden="true">
        <CardImage post={post} className="h-full" />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-bronze-600">
          {categories[0] && <span>{categories[0]}</span>}
          <span className="h-1 w-1 rounded-full bg-bronze-300" aria-hidden="true" />
          <time dateTime={post.date} className="text-slate-warm">
            {formatDate(post.date)}
          </time>
        </div>
        <h3 className="mt-3 font-display text-xl font-medium leading-snug text-deep-950">
          <a href={href} className="transition-colors duration-200 hover:text-bronze-600">
            {plainText(post.title.rendered)}
          </a>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-graphite">
          {plainText(post.excerpt.rendered)}
        </p>
        <a
          href={href}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-deep-900 transition-colors duration-200 hover:text-bronze-600"
        >
          Ler artigo
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

function Skeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-[1.5rem] border border-line bg-paper">
          <div className="aspect-[16/10] animate-pulse bg-cream" />
          <div className="space-y-3 p-7">
            <div className="h-3 w-24 animate-pulse rounded bg-cream" />
            <div className="h-5 w-4/5 animate-pulse rounded bg-cream" />
            <div className="h-3 w-full animate-pulse rounded bg-cream" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-cream" />
          </div>
        </div>
      ))}
    </div>
  )
}

function Notice({ title, children, onRetry }: { title: string; children: ReactNode; onRetry?: () => void }) {
  return (
    <div className="reveal rounded-2xl border border-dashed border-bronze-400/50 bg-cream/60 p-8 text-center">
      <h2 className="font-display text-2xl font-medium text-deep-950">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-graphite">{children}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep-900 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-deep-950"
        >
          <RefreshCw size={15} aria-hidden="true" />
          Tentar novamente
        </button>
      )}
    </div>
  )
}

export function BlogList() {
  const [posts, setPosts] = useState<WPPost[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [status, setStatus] = useState<Status>(isWpConfigured ? 'loading' : 'error')
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [retry, setRetry] = useState(0)
  const ref = useReveal(0.12, posts.length)

  useEffect(() => {
    setSeo(`Blog | ${doctor.name} — ${doctor.specialty}`, blog.description)
  }, [])

  useEffect(() => {
    if (!isWpConfigured) return
    let cancelled = false
    fetchPosts({ page: 1, search: query })
      .then(({ data, totalPages }) => {
        if (cancelled) return
        setPosts(data)
        setTotalPages(totalPages)
        setPage(1)
        setStatus(data.length ? 'ready' : 'empty')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [query, retry])

  async function loadMore() {
    if (loadingMore || page >= totalPages) return
    setLoadingMore(true)
    setLoadError(false)
    try {
      const { data } = await fetchPosts({ page: page + 1, search: query })
      setPosts((prev) => [...prev, ...data])
      setPage((p) => p + 1)
    } catch {
      setLoadError(true)
    } finally {
      setLoadingMore(false)
    }
  }

  return (
    <>
      <section id="blog" aria-labelledby="blog-titulo" className="relative overflow-hidden pt-28 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 60% at 85% -10%, rgba(192,154,95,0.08) 0%, rgba(247,244,238,0) 60%)',
          }}
        />
        <Container>
          <div className="relative max-w-3xl pb-8 lg:pb-10">
            <SectionLabel>Blog</SectionLabel>
            <h1
              id="blog-titulo"
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-deep-950 sm:text-5xl lg:text-6xl"
            >
              {blog.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-graphite">{blog.description}</p>

            <form
              role="search"
              onSubmit={(event) => {
                event.preventDefault()
                setStatus('loading')
                setQuery(search)
              }}
              className="mt-9 flex max-w-xl items-center gap-2 rounded-full border border-line bg-paper p-1.5 pl-5 focus-within:border-bronze-400"
            >
              <Search size={18} className="shrink-0 text-slate-warm" aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar conteúdos..."
                aria-label="Buscar conteúdos do blog"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-deep-900 outline-none placeholder:text-slate-warm"
              />
              <button
                type="submit"
                className="rounded-full bg-deep-900 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-deep-950"
              >
                Buscar
              </button>
            </form>
          </div>
        </Container>
      </section>

      <section aria-label="Lista de conteúdos" className="pb-16 lg:pb-24">
        <Container>
          <div ref={ref}>
            {!isWpConfigured ? (
              <Notice title="Blog em configuração">
                Defina <code className="font-mono text-xs text-deep-800">VITE_WP_API_URL</code> no arquivo{' '}
                <code className="font-mono text-xs text-deep-800">.env</code> com a URL do WordPress para
                carregar os conteúdos.
              </Notice>
            ) : status === 'loading' ? (
              <Skeleton />
            ) : status === 'error' ? (
              <Notice
                title="Não foi possível carregar os conteúdos"
                onRetry={() => {
                  setStatus('loading')
                  setRetry((n) => n + 1)
                }}
              >
                Verifique se o WordPress está no ar e se a URL configurada está correta.
              </Notice>
            ) : status === 'empty' ? (
              <Notice title="Nenhum conteúdo publicado ainda">
                {query ? `Nenhum artigo encontrado para “${query}”.` : 'Novos artigos serão publicados em breve.'}
              </Notice>
            ) : (
              <>
                {posts.length > 0 && <FeaturedCard post={posts[0]} />}
                {posts.length > 1 && (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(1).map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-col items-center gap-3">
                  {page < totalPages && (
                    <button
                      type="button"
                      onClick={loadMore}
                      disabled={loadingMore}
                      className="inline-flex items-center gap-2 rounded-full border border-deep-900 px-7 py-3.5 text-sm font-semibold text-deep-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-900 hover:text-paper disabled:cursor-wait disabled:opacity-60"
                    >
                      {loadingMore ? 'Carregando...' : 'Carregar mais artigos'}
                      {!loadingMore && <ArrowRight size={16} aria-hidden="true" />}
                    </button>
                  )}
                  {page < totalPages && (
                    <p className="text-xs text-slate-warm">
                      Página {page} de {totalPages}
                    </p>
                  )}
                  {loadError && (
                    <p className="text-xs text-bronze-700">Falha ao carregar mais artigos. Tente novamente.</p>
                  )}
                </div>
              </>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
