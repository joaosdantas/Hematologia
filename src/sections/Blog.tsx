import { ArrowUpRight, BookOpen } from 'lucide-react'
import { blog, doctor } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { useReveal } from '../components/useReveal'

export function Blog() {
  const ref = useReveal()

  return (
    <section
      id="conteudos"
      aria-labelledby="conteudos-titulo"
      className="scroll-mt-24 border-t border-line/60 bg-cream/50 py-16 lg:py-24"
    >
      <Container>
        <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="reveal">
            <SectionLabel>Conteúdo</SectionLabel>
            <h2
              id="conteudos-titulo"
              className="font-display text-3xl font-medium leading-tight tracking-tight text-deep-950 sm:text-4xl lg:text-[2.75rem]"
            >
              {blog.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
              {blog.description}
            </p>
            {blog.upcoming && (
              <p className="mt-3 text-xs leading-relaxed text-slate-warm">
                Conteúdo em preparação e publicado em breve.
              </p>
            )}
            <a
              href={doctor.links.blog}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-deep-900 px-7 py-3.5 text-sm font-semibold text-deep-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-900 hover:text-paper"
            >
              {blog.cta}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="reveal">
            {/* Cartão editorial provisório — a lista real virá do blog (WordPress) */}
            <div className="relative overflow-hidden rounded-2xl border border-line bg-paper p-6">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-bronze-100"
              />
              <BookOpen
                size={28}
                className="relative text-bronze-600"
                aria-hidden="true"
              />
              <p className="relative mt-6 font-display text-xl font-medium leading-snug text-deep-900">
                Espaço reservado para os primeiros artigos sobre hematologia e hemoterapia.
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-warm">
                Os conteúdos serão publicados no blog deste site, alimentado por{' '}
                <span className="font-medium"> WordPress</span>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}