import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react'
import { doctor, footer } from '../data/doctor'
import { Logo } from './Logo'
import { usePathname } from '../lib/router'

function InstagramMark({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  const pathname = usePathname()
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/')
  const resolve = (href: string) => (href.startsWith('#') && isBlog ? `/${href}` : href)

  return (
    <footer id="contato" className="border-t border-deep-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Contato e informações institucionais do {doctor.professionalTitle.toLowerCase()}
      </h2>

      <div className="bg-deep-950 text-paper">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            {/* Marca */}
            <div>
              <Logo variant="light" />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
                {doctor.name}
                <br />
                {doctor.professionalTitle} — {doctor.specialty}
                <br />
                CRM {doctor.crm} · RQE {doctor.rqe}
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-paper/40">
                Contato
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-paper/80">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-bronze-400" aria-hidden="true" />
                  {doctor.contact.address}
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-bronze-400" aria-hidden="true" />
                  {doctor.contact.phone}
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="shrink-0 text-bronze-400" aria-hidden="true" />
                  <a
                    href={doctor.links.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-paper"
                  >
                    {doctor.contact.whatsapp}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <InstagramMark size={18} />
                  <a
                    href={doctor.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-paper"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-paper/40">
                Acesso rápido
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-paper/80">
                <li>
                  <a href={resolve('#sobre')} className="transition-colors duration-200 hover:text-paper">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href={resolve('#atuacao')} className="transition-colors duration-200 hover:text-paper">
                    Atuação
                  </a>
                </li>
                <li>
                  <a href={resolve('#segunda-opiniao')} className="transition-colors duration-200 hover:text-paper">
                    Segunda opinião
                  </a>
                </li>
                <li>
                  <a href={resolve('#consulta')} className="transition-colors duration-200 hover:text-paper">
                    Como é a consulta
                  </a>
                </li>
                <li>
                  <a href="/blog" className="transition-colors duration-200 hover:text-paper">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={resolve('#duvidas')} className="transition-colors duration-200 hover:text-paper">
                    Dúvidas frequentes
                  </a>
                </li>
                {footer.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors duration-200 hover:text-paper">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-paper/10 pt-6">
            <p className="max-w-3xl text-xs leading-relaxed text-paper/50">
              {footer.disclaimer}
            </p>

            <div className="mt-6 flex flex-col gap-4 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} {doctor.name}. Todos os direitos reservados.
              </p>
              <a
                href={resolve('#inicio')}
                aria-label="Voltar ao início da página"
                className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 transition-colors duration-200 hover:border-paper/50 hover:text-paper"
              >
                Voltar ao topo
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}