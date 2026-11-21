import { ArrowRight, Building2, Video } from 'lucide-react'
import { consultation, doctor } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { Monogram } from '../components/Logo'
import { useReveal } from '../components/useReveal'

const icons = [Building2, Video]

export function Consulta() {
  const ref = useReveal()

  return (
    <section
      id="consulta"
      aria-labelledby="consulta-titulo"
      className="scroll-mt-24 border-t border-line/60 py-16 lg:py-24"
    >
      <Container>
        <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal relative overflow-hidden rounded-2xl bg-deep-900">
            <img
              src="/consulta.jpg"
              alt={`${doctor.name} no consultório`}
              width={1199}
              height={1312}
              className="aspect-[4/3] w-full object-cover object-[center_25%] sm:aspect-[4/5]"
            />
            <div className="pointer-events-none absolute inset-3 rounded-xl border border-paper/25" />
            <div className="absolute right-6 top-6 opacity-80">
              <Monogram size={48} />
            </div>
          </div>

          <div className="reveal">
            <SectionLabel>Consulta</SectionLabel>
            <h2
              id="consulta-titulo"
              className="font-display text-3xl font-medium leading-tight tracking-tight text-deep-950 sm:text-4xl lg:text-[2.75rem]"
            >
              {consultation.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
              {consultation.lead}
            </p>

            <div className="mt-8 divide-y divide-line border-y border-line">
              {consultation.modes.map((mode, index) => {
                const Icon = icons[index]
                return (
                  <article key={mode.title} className="flex gap-5 py-6">
                    <Icon size={22} className="mt-0.5 shrink-0 text-bronze-600" aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-xl font-medium text-deep-950">
                        {mode.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-graphite">
                        {mode.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-slate-warm">{consultation.note}</p>

            <a
              href={doctor.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-deep-900 px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-950"
            >
              {consultation.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
