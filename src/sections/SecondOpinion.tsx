import { ArrowUpRight } from 'lucide-react'
import { doctor, secondOpinion } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { Monogram } from '../components/Logo'
import { useReveal } from '../components/useReveal'

export function SecondOpinion() {
  const ref = useReveal()

  return (
    <section
      id="segunda-opiniao"
      aria-labelledby="segunda-opiniao-titulo"
      className="scroll-mt-24 border-t border-line/60 py-16 lg:py-24"
    >
      <Container>
        <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="reveal">
            <SectionLabel>Segunda opinião</SectionLabel>
            <h2
              id="segunda-opiniao-titulo"
              className="font-display text-3xl font-medium leading-tight tracking-tight text-deep-950 sm:text-4xl lg:text-[2.75rem]"
            >
              {secondOpinion.title}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-graphite">
              {secondOpinion.lead}
            </p>
          </div>

          <div className="reveal relative overflow-hidden rounded-2xl bg-deep-950 p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -right-10 text-paper/[0.07]"
            >
              <Monogram size={240} variant="outline" />
            </div>
            <div className="relative">
              <p className="font-display text-lg leading-relaxed text-paper sm:text-xl lg:text-2xl">
                {secondOpinion.description}
              </p>
              <a
                href={doctor.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-deep-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-paper/10"
              >
                {secondOpinion.cta}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
