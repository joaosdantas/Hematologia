import { useEffect, useState } from 'react'

/**
 * Roteamento mínimo baseado na History API.
 * O site continua estático; apenas precisamos saber se a URL atual é uma
 * rota do blog. Links normais (<a href="/blog/...">) fazem navegação completa,
 * o que mantém SEO e metadados corretos sem dependências extras.
 */
export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const onChange = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onChange)
    return () => window.removeEventListener('popstate', onChange)
  }, [])

  return pathname
}
