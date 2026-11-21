import { ArrowRight, CalendarClock } from 'lucide-react'
import { hero, doctor } from '../data/doctor'

function DoctorPhoto() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-deep-950 sm:aspect-[4/5]">
      <img
        src="/dr-augusto.jpg"
        alt={`${doctor.name}, ${doctor.professionalTitle.toLowerCase()}`}
        width={1151}
        height={1366}
        className="h-full w-full object-cover object-[center_18%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep-950/90 via-deep-950/35 to-transparent"
      />
      <div className="pointer-events-none absolute inset-3 rounded-xl border border-paper/25" />
      <div className="absolute bottom-7 left-7 right-7">
        <p className="font-display text-2xl text-paper">{doctor.name}</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-paper/80">
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
      className="relative overflow-hidden pt-28 lg:pt-32"
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

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Texto */}
          <div>
            <p className="animate-fade-up flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-bronze-600">
              <span aria-hidden="true" className="h-px w-10 bg-bronze-400" />
              {hero.kicker}
            </p>

            <h1
              id="hero-titulo"
              className="animate-fade-up delay-100 mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-deep-950 sm:text-5xl lg:text-6xl"
            >
              {hero.headline}
            </h1>

            <p className="animate-fade-up delay-200 mt-5 max-w-xl text-lg leading-relaxed text-graphite">
              {hero.sub}
            </p>

            <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            <p className="animate-fade-up delay-400 mt-6 text-xs leading-relaxed text-slate-warm">
              Agendamento, horários e localização:
              <span className="font-semibold"> {doctor.contact.address}</span>
            </p>
          </div>

          {/* Espaço reservado para fotografia */}
          <div className="animate-fade-in delay-200">
            <DoctorPhoto />
          </div>
        </div>
      </div>
    </section>
  )
}