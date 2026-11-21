import { about, doctor } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { Monogram } from '../components/Logo'
import { useReveal } from '../components/useReveal'

function AboutPhoto() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-deep-800 sm:aspect-[3/4]">
      <img
        src="/dr-augusto.jpg"
        alt={`${doctor.name} em seu consultório`}
        width={1151}
        height={1366}
        className="h-full w-full object-cover object-[center_25%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-xl border border-paper/25"
      />
      <div className="absolute right-6 top-6 opacity-80">
        <Monogram size={44} />
      </div>
    </div>
  )
}

export function About() {
  const ref = useReveal()

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="scroll-mt-24 border-t border-line/60 py-16 lg:py-24"
    >
      <Container>
        <div ref={ref} className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="reveal">
            <AboutPhoto />
          </div>

          <div>
            <div className="reveal">
              <SectionLabel>Sobre</SectionLabel>
              <h2
                id="sobre-titulo"
                className="font-display text-3xl font-medium leading-tight tracking-tight text-deep-950 sm:text-4xl lg:text-[2.75rem]"
              >
                {about.title}
              </h2>
            </div>

            <div className="reveal mt-6 rounded-xl border-l-2 border-bronze-400 bg-cream/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-600">
                {about.bioLabel}
              </p>
              <p className="mt-3 font-display text-lg leading-relaxed text-deep-900">
                {doctor.bio}
              </p>
            </div>

            <dl className="reveal mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-line/70 sm:grid-cols-2">
              {about.fields.map((field) => (
                <div key={field.label} className="bg-paper p-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-600">
                    {field.label}
                  </dt>
                  <dd className="mt-2 font-medium text-deep-900">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}