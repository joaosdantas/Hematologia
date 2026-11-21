import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '../data/doctor'
import { Container, SectionLabel } from '../components/ui'
import { useReveal } from '../components/useReveal'

export function FAQ() {
  const ref = useReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-titulo"
      className="scroll-mt-24 py-16 lg:py-24"
    >
      <Container>
        <div ref={ref} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>Dúvidas</SectionLabel>
            <h2
              id="duvidas-titulo"
              className="font-display text-3xl font-medium leading-tight tracking-tight text-deep-950 sm:text-4xl lg:text-[2.75rem]"
            >
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-graphite">
              Respostas gerais e cuidadosas. Elas não substituem a avaliação individual
              em consulta.
            </p>
          </div>

          <div className="reveal">
            <div className="divide-y divide-line border-y border-line">
              {faq.map((item, i) => {
                const isOpen = openIndex === i
                const panelId = `faq-painel-${i}`
                const buttonId = `faq-botao-${i}`
                return (
                  <div key={item.question}>
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200 hover:text-bronze-600"
                      >
                        <span className="font-display text-lg font-medium text-deep-950">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={20}
                          aria-hidden="true"
                          className={`shrink-0 text-bronze-500 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="pb-6"
                    >
                      <p className="max-w-xl leading-relaxed text-graphite">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}