import { useEffect, useRef } from 'react'

/**
 * Observa elementos `.reveal` dentro do container retornado.
 * O parâmetro `key` permite reobservar quando o conteúdo é carregado
 * assincronamente (ex.: posts vindos da API do WordPress).
 */
export function useReveal(threshold = 0.12, key?: string | number) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const targets = node.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold, key])

  return ref
}
