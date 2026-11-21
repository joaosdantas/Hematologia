import { useEffect, useRef } from 'react'

/**
 * Observa elementos `.reveal` dentro do container retornado (e o próprio
 * container, se ele também tiver a classe).
 *
 * O estado inicial de ocultação é aplicado via JS (classe `pending`), não no
 * CSS. Assim, se o IntersectionObserver não existir ou falhar, o conteúdo
 * continua visível — evitando seções inteiras em branco.
 */
export function useReveal(threshold = 0.12, key?: string | number) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const targets: HTMLElement[] = []
    if (node.classList.contains('reveal')) targets.push(node)
    targets.push(...Array.from(node.querySelectorAll<HTMLElement>('.reveal')))
    if (!targets.length) return

    const show = (el: HTMLElement) => {
      el.classList.remove('pending')
      el.classList.add('is-visible')
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach(show)
      return
    }

    targets.forEach((el) => {
      if (!el.classList.contains('is-visible')) el.classList.add('pending')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement)
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
