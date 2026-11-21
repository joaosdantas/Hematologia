import { doctor } from '../data/doctor'
import { usePathname } from '../lib/router'

/**
 * Monograma "AG" em SVG — símbolo da marca.
 * Reutilizado no logo, nas fotos e no card final.
 */
export function Monogram({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Contorno quadrado sutil */}
      <rect x="1" y="1" width="62" height="62" rx="14" fill="#141e22" />
      <rect
        x="1.75"
        y="1.75"
        width="60.5"
        height="60.5"
        rx="13.25"
        stroke="#f7f4ee"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />
      {/* Monograma serifado A / G */}
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontWeight="500"
        fontSize="24"
        letterSpacing="1"
        fill="#f7f4ee"
      >
        A
      </text>
      <text
        x="32"
        y="56"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontWeight="500"
        fontSize="13"
        letterSpacing="4"
        fill="#c09a5f"
      >
        G
      </text>
    </svg>
  )
}

export function Logo({
  variant = 'dark',
  size = 44,
}: {
  variant?: 'dark' | 'light'
  size?: number
}) {
  const nameColor = variant === 'dark' ? 'text-deep-900' : 'text-paper'
  const subColor =
    variant === 'dark' ? 'text-deep-600' : 'text-paper/70'
  const pathname = usePathname()
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/')

  return (
    <a
      href={isBlog ? '/#inicio' : '#inicio'}
      className="group flex items-center gap-3"
      aria-label={`${doctor.name} — ${doctor.specialty}`}
    >
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
        <Monogram size={size} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${nameColor}`}
        >
          {doctor.name}
        </span>
        <span
          className={`mt-1 text-[10px] font-medium uppercase tracking-[0.16em] ${subColor}`}
        >
          Hematologia e Hemoterapia
        </span>
      </span>
    </a>
  )
}