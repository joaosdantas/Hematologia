import { CalendarClock } from 'lucide-react'
import { finalCta, doctor } from '../data/doctor'
import { Container } from '../components/ui'
import { Monogram } from '../components/Logo'
import { useReveal } from '../components/useReveal'

export function CTAFinal() {
  const ref = useReveal()

  return (
    <section aria-labelledby="cta-titulo" className="py-16 lg:py-24">
      <Container>
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-3xl bg-deep-950 px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(90% 120% at 15% -10%, rgba(111,143,155,0.28) 0%, rgba(20,30,34,0) 60%), radial-gradient(70% 90% at 100% 110%, rgba(192,154,95,0.16) 0%, rgba(20,30,34,0) 55%)',
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-10 hidden opacity-[0.09] sm:block"
          >
            <Monogram size={280} />
          </div>

          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-bronze-400">
              {doctor.name} · {doctor.specialty}
            </p>
            <h2
              id="cta-titulo"
              className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl lg:text-[2.75rem]"
            >
              {finalCta.headline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/70">
              O primeiro passo é simples: agendar um horário para conversarmos sobre
              o seu caso.
            </p>
            <a
              href={doctor.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-base font-semibold text-deep-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-paper/10"
            >
              {finalCta.cta}
              <CalendarClock size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}