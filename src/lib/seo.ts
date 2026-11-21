/** Atualiza título e descrição da página conforme a rota/blog post. */
export function setSeo(title: string, description?: string) {
  document.title = title
  if (!description) return

  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.appendChild(meta)
  }
  meta.content = description
}
