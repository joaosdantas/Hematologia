import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { doctor } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { CTAFinal } from '../sections/CTAFinal'
import {
  coverImage,
  fetchPost,
  formatDate,
  isWpConfigured,
  plainText,
  postCategories,
  type WPPost,
} from '../blog/api'
import { setSeo } from '../lib/seo'

type Status = 'loading' | 'ready' | 'missing' | 'error'

export function BlogPost({ slug }: { slug: string }) {
  const [post, setPost] = useState<WPPost | null>(null)
  const [status, setStatus] = useState<Status>(isWpConfigured ? 'loading' : 'error')

  useEffect(() => {
    if (!isWpConfigured) return
    let cancelled = false

    fetchPost(slug)
      .then(({ data }) => {
        if (cancelled) return
        const found = data[0]
        if (!found) {
          setStatus('missing')
          setSeo(`Artigo não encontrado | ${doctor.name}`)
          return
        }
        setPost(found)
        setStatus('ready')
        setSeo(
          `${plainText(found.title.rendered)} | ${doctor.name}`,
          plainText(found.excerpt.rendered).slice(0, 160)
        )
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  const image = post ? coverImage(post) : null
  const categories = post ? postCategories(post) : []
  const media = post?._embedded?.['wp:featuredmedia']?.[0]

  return (
    <>
      <article aria-labelledby="post-titulo">
        <Container>
          <div className="max-w-3xl pb-10 pt-28 lg:pt-32">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-deep-700 transition-colors hover:text-bronze-600"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Voltar para o blog
            </a>

            {status === 'ready' && post && (
              <>
                <div className="mt-10">
                  <SectionLabel>{categories[0] ?? 'Blog'}</SectionLabel>
                  <h1
                    id="post-titulo"
                    className="font-display text-4xl font-medium leading-[1.12] tracking-tight text-deep-950 sm:text-5xl"
                  >
                    {plainText(post.title.rendered)}
                  </h1>
                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-warm">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{doctor.shortName}</span>
                  </div>
                </div>

                {image && (
                  <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-deep-900">
                    <img
                      src={image}
                      alt={media?.alt_text || plainText(post.title.rendered)}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </div>
                )}

                <div
                  className="blog-prose mt-12"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                <div className="mt-14 border-t border-line pt-8">
                  <a
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-deep-900 transition-colors hover:text-bronze-600"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    Ver todos os conteúdos
                  </a>
                </div>
              </>
            )}

            {status === 'loading' && (
              <div className="mt-10 space-y-4" aria-hidden="true">
                <div className="h-3 w-24 animate-pulse rounded bg-cream" />
                <div className="h-12 w-4/5 animate-pulse rounded bg-cream" />
                <div className="h-4 w-1/3 animate-pulse rounded bg-cream" />
                <div className="mt-10 aspect-[16/9] animate-pulse rounded-[1.75rem] bg-cream" />
                <div className="h-4 w-full animate-pulse rounded bg-cream" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-cream" />
              </div>
            )}

            {(status === 'missing' || status === 'error') && (
              <div className="reveal mt-10 rounded-[1.75rem] border border-dashed border-bronze-400/50 bg-cream/60 p-10 text-center">
                <h1 id="post-titulo" className="font-display text-2xl font-medium text-deep-950">
                  {status === 'missing' ? 'Conteúdo não encontrado' : 'Não foi possível carregar o conteúdo'}
                </h1>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-graphite">
                  {status === 'missing'
                    ? 'O artigo pode ter sido movido ou removido.'
                    : 'Verifique se o WordPress está no ar e se a URL configurada está correta.'}
                </p>
                <a
                  href="/blog"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep-900 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-deep-950"
                >
                  <ArrowLeft size={15} aria-hidden="true" />
                  Voltar para o blog
                </a>
              </div>
            )}
          </div>
        </Container>
      </article>
      {status === 'ready' && <CTAFinal />}
    </>
  )
}
