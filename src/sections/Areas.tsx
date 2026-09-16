import { areas, doctor } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { useReveal } from '../components/useReveal'

export function Areas() {
  const ref = useReveal()

  return (
    <section
      id="atuacao"
      aria-labelledby="atuacao-titulo"
      className="scroll-mt-24 bg-deep-50 py-24 lg:py-32"
    >
      <Container>
        <div className="reveal max-w-2xl">
          <SectionLabel>Atuação</SectionLabel>
          <h2
            id="atuacao-titulo"
            className="font-display text-3xl font-medium leading-tight tracking-tight text-deep-950 sm:text-4xl lg:text-[2.75rem]"
          >
            Quando procurar um hematologista
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">
            O atendimento do {doctor.shortName.toLowerCase()} abrange as seguintes áreas.
            Cada item abaixo será detalhado com a descrição oficial em breve.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-line/80 sm:grid-cols-2 lg:grid-cols-3"
        >
          {areas.map((area) => (
            <article
              key={area.index}
              className="reveal group relative bg-paper p-8 transition-colors duration-300 hover:bg-white"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-bronze-500 transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="font-display text-sm tracking-[0.25em] text-bronze-500">
                0{area.index}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium leading-snug text-deep-950">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <p className="reveal mt-6 text-xs leading-relaxed text-slate-warm">
          Em caso de dúvida sobre qual área se aplica ao seu caso, a avaliação em consulta é o
          caminho mais adequado.
        </p>
      </Container>
    </section>
  )
}