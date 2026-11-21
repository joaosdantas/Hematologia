import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { navigation, doctor, hero } from '../data/doctor'
import { usePathname } from '../lib/router'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/')

  // Na landing as âncoras são locais; no blog elas apontam de volta para a home.
  const resolve = (href: string) => (href.startsWith('#') && isBlog ? `/${href}` : href)
  const isActive = (href: string) =>
    href === pathname || (href === '/blog' && pathname.startsWith('/blog'))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/70 bg-paper/90 backdrop-blur-md'
          : 'border-b border-transparent bg-paper/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={resolve(item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-bronze-600'
                      : 'text-deep-800/80 hover:text-deep-950'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={doctor.links.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-deep-900 px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-950 lg:inline-flex"
        >
          {hero.primaryCta}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-deep-900 transition-colors duration-200 hover:bg-cream lg:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`absolute inset-x-0 top-full lg:hidden ${
          open ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
      >
        <div
          className={`flex h-[calc(100dvh-76px)] flex-col overflow-y-auto bg-paper px-5 pb-10 pt-4 transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <nav aria-label="Navegação mÃ³vel">
            <ul className="flex flex-col divide-y divide-line/80">
              {navigation.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={resolve(item.href)}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className="flex items-center justify-between py-4 font-display text-2xl text-deep-900 transition-colors duration-200 hover:text-bronze-600"
                  >
                    {item.label}
                    <span className="text-xs text-slate-warm/60">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={doctor.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-full bg-deep-900 px-6 py-4 text-center text-base font-semibold text-paper transition-colors duration-200 hover:bg-deep-950"
          >
            {hero.primaryCta}
          </a>

          <a href={resolve('#contato')} onClick={() => setOpen(false)} className="mt-5 block text-center text-base font-medium text-deep-700">
            Informações de contato
          </a>
        </div>
      </div>
    </header>
)
}
