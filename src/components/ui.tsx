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
      className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-600"
    >
      <span aria-hidden="true" className="h-px w-8 bg-bronze-400" />
      {children}
    </p>
  )
}