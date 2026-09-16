import { principles } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { useReveal } from '../components/useReveal'

export function Approach() {
  const ref = useReveal()

  return (
    <section
      id="abordagem"
      aria-labelledby="abordagem-titulo"
      className="scroll-mt-24 py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="reveal lg:sticky lg:top-32 lg:self-start">
            <SectionLabel>Abordagem</SectionLabel>
            <h2
              id="abordagem-titulo"
              className="font-display text-3xl font-medium leading-tight tracking-tight text-deep-950 sm:text-4xl lg:text-[2.75rem]"
            >
              Um atendimento baseado em escuta, investigação e clareza.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-graphite">
              São os princípios que orientam a comunicação e a relação com cada paciente —
              do primeiro contato ao acompanhamento.
            </p>
          </div>

          <div ref={ref} className="divide-y divide-line">
            {principles.map((principle, i) => (
              <article key={principle.title} className="reveal group flex gap-6 py-9">
                <span className="font-display text-sm tracking-[0.25em] text-bronze-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-medium text-deep-900 transition-colors duration-300 group-hover:text-deep-950">
                    {principle.title}
                  </h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-graphite">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}