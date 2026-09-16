import { MessageCircle } from 'lucide-react'
import { doctor } from '../data/doctor'

/**
 * Botão fixo inferior (mobile) para contato/agendamento.
 * Configurável: desative em `doctor.links` ou ajuste o destino.
 */
export function FloatingCta() {
  return (
    <a
      href={doctor.links.booking}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-deep-900 py-4 text-base font-semibold text-paper shadow-lg shadow-deep-950/25 transition-all duration-300 hover:bg-deep-950 active:scale-[0.98] md:hidden"
      aria-label="Agendar consulta"
    >
      <MessageCircle size={20} aria-hidden="true" />
      Agendar consulta
    </a>
  )
}