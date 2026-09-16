# Dr. Augusto Gaidukas | Hematologia

Landing page profissional para o médico hematologista Dr. Augusto Gaidukas.

**Stack:** React · Vite · TypeScript · Tailwind CSS v4 · Lucide Icons

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento — http://localhost:5173
npm run build    # build de produção
npm run preview  # pré-visualizar o build
npm run lint     # oxlint
npx tsc -b       # checagem de tipos
```

## Estrutura

```
src/
├── components/    # Logo, Header, Footer, FloatingCta, UI primitivas
├── sections/      # Hero, About, Areas, Approach, Blog, FAQ, CTAFinal
├── data/
│   └── doctor.ts  # ⭐ TODOS os dados do médico e do site em um único arquivo
└── index.css      # Design tokens (cores, tipografia) — edite aqui a identidade
```

## Identidade visual

Definida em `src/index.css` via `@theme` (Tailwind v4) e centralizada:

- **Base:** off-white quente (`paper` / `cream`)
- **Institucional:** azul petróleo profundo (`deep-50` a `deep-950`)
- **Secundário:** bronze/âmbar queimado (`bronze-*`) — usado com parcimônia
- **Tipografia:** Fraunces (serif, editoriais/títulos) + Inter (sans, interface)
- **Marca:** monograma "AG" tipográfico em SVG (`src/components/Logo.tsx`), pronto para evoluir como símbolo

## Como atualizar as informações

Todos os textos, placeholders e links do site vivem em `src/data/doctor.ts`.
Basta substituir os campos `[CAMPO]` pelos dados reais. Onde não houver dado:

- Credenciais → `[CRM]`, `[RQE]` (na verdade, apenas quando confirmados)
- Biografia → `[INSERIR AQUI A BIOGRAFIA PROFISSIONAL DO DR. AUGUSTO]`
- Contato → `[Telefone]`, `[WhatsApp]`, `[E-mail]`, `[Endereço]`, `[Instagram]`
- Link de agendamento → `doctor.links.booking`
- Áreas de atuação e respostas de FAQ → listas `areas` e `faq`

**Atenção:** nada de CRM, RQE, endereço ou formação foi inventado; por padrão
a página exibe apenas dados genéricos e placeholders claramente marcados.

## Blog (WordPress)

O blog será criado futuramente em WordPress. A seção "Conteúdo" já está
preparada para receber os posts; basta apontar `doctor.links.blog` (ex.: `/blog`)
para o endereço real quando o WordPress estiver no ar. Não há CMS/backend neste projeto.

## Aviso

As informações na página têm caráter informativo e não substituem uma consulta
médica. O schema.org (`Physician`) contém apenas dados considerados públicos
(nome e especialidade), sem CRM, endereço ou outras informações estruturadas.