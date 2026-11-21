import type { ReactNode } from 'react'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

export function SectionLabel({
  children,
  id,
}: {
  children: ReactNode
  id?: string
}) {
  return (
    <p
      id={id}
      className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.06em] text-bronze-700"
    >
      <span aria-hidden="true" className="h-px w-6 bg-bronze-400" />
      {children}
    </p>
  )
}