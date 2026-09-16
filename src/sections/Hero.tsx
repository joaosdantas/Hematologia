import { ArrowRight, CalendarClock } from 'lucide-react'
import { hero, doctor } from '../data/doctor'

/**
 * Placeholder visual reservado para a fotografia profissional do médico.
 * Quando a foto estiver disponível, basta substituir o conteúdo de
 * <PhotoPlaceholder /> por uma <img> dentro do mesmo contêiner.
 */
function PhotoPlaceholder() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-deep-950">
      {/* Gradações sutis em petróleo */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 80% 10%, rgba(82,115,127,0.35) 0%, rgba(31,45,51,0) 55%), radial-gradient(100% 80% at 10% 100%, rgba(192,154,95,0.18) 0%, rgba(20,30,34,0) 60%)',
        }}
      />
      {/* Monograma em marca d'água */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="select-none font-display text-[11rem] font-medium leading-none text-paper/[0.06]">
          AG
        </span>
      </div>

      {/* Moldura interna */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-3xl border border-paper/15"
      />

      {/* Metadados do retrato */}
      <div className="absolute left-8 top-7 hidden items-center gap-2 sm:flex">
        <span className="h-[3px] w-6 bg-bronze-500" aria-hidden="true" />
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-paper/50">
          Fotografia profissional em breve
        </p>
      </div>

      <div className="absolute bottom-7 left-8 right-8">
        <p className="font-display text-2xl text-paper">{doctor.name}</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.3em] text-paper/50">
          {doctor.specialty}
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden pt-32 lg:pt-40"
    >
      {/* Textura de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 85% -10%, rgba(192,154,95,0.08) 0%, rgba(247,244,238,0) 60%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Texto */}
          <div>
            <p className="animate-fade-up flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-bronze-600">
              <span aria-hidden="true" className="h-px w-10 bg-bronze-400" />
              {hero.kicker}
            </p>

            <h1
              id="hero-titulo"
              className="animate-fade-up delay-100 mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-deep-950 sm:text-5xl lg:text-6xl"
            >
              {hero.headline}
            </h1>

            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-graphite">
              {hero.sub}
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={doctor.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-deep-900 px-7 py-4 text-base font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-950 hover:shadow-lg hover:shadow-deep-950/25"
              >
                {hero.primaryCta}
                <CalendarClock size={18} aria-hidden="true" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-deep-900 transition-colors duration-300 hover:bg-cream"
              >
                {hero.secondaryCta}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <p className="animate-fade-up delay-400 mt-8 text-xs leading-relaxed text-slate-warm">
              Agendamento, horários e localização:
              <span className="font-semibold"> {doctor.contact.address}</span>
            </p>
          </div>

          {/* Espaço reservado para fotografia */}
          <div className="animate-fade-in delay-200">
            <PhotoPlaceholder />
          </div>
        </div>
      </div>
    </section>
  )
}