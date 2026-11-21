# Dr. Augusto Gaidukas | Hematologia e Hemoterapia

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
├── sections/      # Hero, About, Areas, SecondOpinion, Approach, Consulta, Blog, FAQ, CTAFinal
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

- Credenciais → CRM `229153` e RQE `128025` (confirmados)
- Biografia e formação → já preenchidas com os dados fornecidos (PUC-Campinas e
  residência em Hematologia e Hemoterapia pela Faculdade de Medicina de São José do Rio Preto)
- Contato → `[Telefone]`, `[WhatsApp]`, `[E-mail]`, `[Endereço]`, `[Instagram]`
- Link de agendamento → `doctor.links.booking`
- Áreas de atuação e respostas de FAQ → listas `areas` e `faq`

**Atenção:** nada de endereço ou contato foi inventado; a página exibe apenas
dados genéricos e placeholders claramente marcados nesses campos.

## Blog (WordPress headless)

O WordPress é usado **apenas como ferramenta de publicação** (`wp-admin`).
Toda a exibição — lista de posts, post individual, busca e paginação — é feita
por este projeto React, com o mesmo design system da landing.

### Como funciona

```
[Admin] → blog.cuidedoseusangue.com.br/wp-admin  (escreve e publica)
                     ↓
        WP REST API  /wp-json/wp/v2/posts?_embed
                     ↓ (fetch em runtime)
[Visitante] → cuidedoseusangue.com.br/blog  e  /blog/:slug
```

Os posts aparecem **na hora em que o admin publica**, sem rebuild. Como a busca
acontece em runtime, título e descrição são atualizados via JavaScript. Se for
necessária uma prévia perfeita em redes sociais, a evolução é gerar os posts na
build e fazer o WordPress disparar o deploy por webhook.

### Rotas adicionadas

- `/blog` — lista com destaque, busca e "carregar mais"
- `/blog/:slug` — post individual com metadados e conteúdo formatados

> Em hospedagens que não fazem fallback automático para SPA, é preciso
> redirecionar rotas desconhecidas para `/index.html`. Já incluímos
> `public/_redirects` (Netlify / Cloudflare Pages). Em outros provedores,
> configure uma rewrite equivalente.

### Configuração do WordPress

1. Instale o WP em **`blog.cuidedoseusangue.com.br`** e defina `siteurl`/`home` com essa URL.
2. Em **Configurações → Links permanentes**, escolha **Nome do post**.
3. Crie os posts normalmente. Imagem destacada, categorias e resumo aparecem no site.
4. Opcional: redirecione o tema público do WP para a landing, mantendo só o `wp-admin`
   e a REST API acessíveis. No `functions.php` do tema:

```php
add_action('template_redirect', function () {
  if (!is_admin() && !(defined('REST_REQUEST') && REST_REQUEST)) {
    wp_redirect('https://cuidedoseusangue.com.br/', 301);
    exit;
  }
});
```

5. Se o WP estiver em outro subdomínio, libere CORS no `functions.php`:

```php
add_action('rest_api_init', function () {
  header('Access-Control-Allow-Origin: https://cuidedoseusangue.com.br');
  header('Access-Control-Allow-Methods: GET');
});
```

6. Recomendações de segurança: 2FA no `wp-admin`, desativar XML-RPC e enumeração
   de usuários, manter a REST API somente para leitura.

### Configuração aqui

No `.env`:

```env
VITE_WP_API_URL=https://blog.cuidedoseusangue.com.br
```

Se a variável estiver vazia, a página `/blog` mostra um aviso de configuração
em vez de quebrar.

### Arquivos envolvidos

```
src/blog/api.ts          # tipos e chamadas à REST API
src/pages/BlogList.tsx   # listagem, busca, paginação
src/pages/BlogPost.tsx   # post individual + SEO dinâmico
src/lib/router.ts        # detecta as rotas /blog
src/lib/seo.ts           # título/descrição por rota
src/index.css            # estilos .blog-prose para o HTML do WP
```

O conteúdo do post é inserido via `dangerouslySetInnerHTML` — seguro porque o
HTML é produzido apenas por usuários autenticados no `wp-admin`.

## Skills do projeto

Instalados em `.opencode/skills/` e carregados automaticamente pelo OpenCode
quando relevantes (ou via `@frontend-design` / `@webapp-testing` no prompt):

- **frontend-design** — direção visual, tipografia e critério de design (Anthropic)
- **webapp-testing** — testes de UI com Playwright e capturas de tela
  (requer Python 3.12 + `py -m pip install playwright` + `py -m playwright install chromium`)

## Aviso

As informações na página têm caráter informativo e não substituem uma consulta
médica. O schema.org (`Physician`) contém apenas dados considerados públicos
(nome e especialidade), sem CRM, endereço ou outras informações estruturadas.