---
version: alpha
name: SellNBuyCO
description: |
  Vitrine de contas prontas de Conquer Online. Sistema de três superfícies inspirado na
  estrutura da PlayStation Store (faixas pretas, brancas e de cor da marca que se alternam
  como capítulos), com identidade própria: Violeta Épico para ações de navegação, Ouro
  Lendário só para ações de compra (WhatsApp, oferta), Manrope leve nos títulos e o print
  da conta ocupando a maior parte de cada card. O print é a prova; a interface é silenciosa.

colors:
  primary: "#5b3fd9"
  primary-pressed: "#4a30bd"
  primary-active: "#3a2596"
  on-primary: "#ffffff"
  link-light: "#4a30bd"
  link-dark: "#b3a1ff"
  commerce: "#f5b400"
  commerce-pressed: "#d99e00"
  on-commerce: "#1a1300"
  ink: "#0b0b10"
  body-light: "#4a4a55"
  mute-light: "#6b6b76"
  ash-light: "#cfcfd8"
  canvas-light: "#ffffff"
  surface-soft: "#f2f1f6"
  surface-card: "#f6f5fb"
  hairline-light: "#e7e6ee"
  canvas-dark: "#08080b"
  surface-dark-elevated: "#111117"
  surface-dark-card: "#191921"
  on-dark: "#ffffff"
  body-dark: "#c4c4cf"
  mute-dark: "#8f8f9c"
  hairline-dark: "#2a2a35"
  paddle-dark: "#26262f"
  warning: "#d0213f"

typography:
  display-wordmark:
    fontFamily: Manrope
    fontSize: 104px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: -2px
  display-xl:
    fontFamily: Manrope
    fontSize: 54px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-lg:
    fontFamily: Manrope
    fontSize: 44px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: -0.25px
  display-md:
    fontFamily: Manrope
    fontSize: 35px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0px
  heading-xl:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0px
  heading-lg:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0px
  heading-md:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0px
  body-md:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-strong:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.2px
  body-sm:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  caption-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  caption-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.2px
  price-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.25px
    fontFeature: '"tnum" 1'
  price-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0px
    fontFeature: '"tnum" 1'
  button-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.3px
  button-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.3px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
  section-tablet: 64px
  section-mobile: 48px
  gutter: 24px
  container: 1280px
  nav-height: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 48px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
  button-disabled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.mute-light}"
    rounded: "{rounded.full}"
  button-commerce:
    backgroundColor: "{colors.commerce}"
    textColor: "{colors.on-commerce}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 48px
  button-commerce-pressed:
    backgroundColor: "{colors.commerce-pressed}"
    textColor: "{colors.on-commerce}"
  button-secondary-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 48px
  button-secondary-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 48px
  search-bar-dark:
    backgroundColor: "{colors.surface-dark-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.full}"
    padding: 10px 20px
    height: 44px
  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    height: 48px
  text-input-border:
    backgroundColor: "{colors.ash-light}"
    height: 1px
  field-error:
    textColor: "{colors.warning}"
    typography: "{typography.caption-md}"
  filter-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 8px 16px
    height: 40px
  filter-pill-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
  account-tile:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.md}"
    padding: 0px
  account-tile-meta:
    textColor: "{colors.mute-light}"
    typography: "{typography.caption-md}"
  account-tile-price:
    textColor: "{colors.ink}"
    typography: "{typography.price-md}"
  badge-info:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  carousel-paddle:
    backgroundColor: "{colors.paddle-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 48px
  thumb-strip-item:
    backgroundColor: "{colors.surface-dark-card}"
    rounded: "{rounded.md}"
    width: 112px
  product-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  product-card-dark:
    backgroundColor: "{colors.surface-dark-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  hero-supporting-text:
    textColor: "{colors.body-dark}"
    typography: "{typography.body-md}"
  meta-dark:
    textColor: "{colors.mute-dark}"
    typography: "{typography.caption-md}"
  divider-light:
    backgroundColor: "{colors.hairline-light}"
    height: 1px
  divider-dark:
    backgroundColor: "{colors.hairline-dark}"
    height: 1px
  attribute-row:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body-light}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 12px 0px
  dialog-card:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 32px
  drawer:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 24px
  popover-dark:
    backgroundColor: "{colors.surface-dark-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.md}"
    padding: 16px
  primary-nav:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    height: 64px
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  hero-band-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  footer-section:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  footer-wordmark:
    textColor: "{colors.on-primary}"
    typography: "{typography.display-wordmark}"
  crop-frame:
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.md}"
    size: 184px
  gallery-bento:
    backgroundColor: "{colors.surface-dark-elevated}"
    rounded: "{rounded.md}"
    padding: 0px
  rhythm-line:
    backgroundColor: "{colors.hairline-light}"
    width: 1px
  link-inline-light:
    textColor: "{colors.link-light}"
    typography: "{typography.caption-md}"
  link-inline-dark:
    textColor: "{colors.link-dark}"
    typography: "{typography.caption-md}"
---

# SellNBuyCO

## Overview

A SellNBuyCO é uma vitrine de contas prontas de Conquer Online. Quem chega quer ver a conta,
confiar no que vê e falar com o vendedor. O sistema empresta a **estrutura** da PlayStation
Store (capítulos em faixas de cor inteira, cards de 8px, botões em pílula, títulos leves) e
troca a **identidade**: nada de azul da marca nem fonte proprietária.

A página rola em capítulos. Cada capítulo é uma faixa de ponta a ponta em um de três modos:

- **Faixa escura** (`{colors.canvas-dark}`): momentos editoriais. Hero com a conta em destaque,
  topo da página de uma conta, topo de Recompensas, 404.
- **Faixa clara** (`{colors.canvas-light}`): superfícies de uso. Catálogo com filtros,
  atributos da conta, contas relacionadas, formulários.
- **Faixa da marca** (`{colors.primary}`): o fechamento. Só o rodapé usa essa faixa; no máximo
  uma por página.

A troca de cor da faixa **é** o divisor. Não há linhas, gradientes nem ornamentos entre
capítulos; o ritmo vertical é `{spacing.section}` (96px) no desktop.

O tom é de loja séria de colecionador: títulos em Manrope peso 300, quase editoriais, deixando
os prints falarem. Copy é informação, não decoração. O público é jogador brasileiro (pt-BR
primeiro, en-US espelhado), muitas vezes no celular, comparando prints e preços em CPs.

**Características-chave:**
- Três modos de faixa alternando de cima para baixo: escura → clara → marca.
- `{colors.primary}` (Violeta Épico) em toda ação de navegação: ver contas, filtros ativos,
  badges, links em faixa clara e o rodapé.
- `{colors.commerce}` (Ouro Lendário) **só** em ação de compra: "Tenho interesse", "Comprar no
  WhatsApp", "Enviar todos no WhatsApp". Nunca em navegação ou hero.
- Violeta e ouro vêm das raridades do próprio jogo (épico e lendário): o código de cor já é
  familiar para quem joga.
- Print da conta ocupa 60–90% de cada card e do hero. Sempre 16:9 (`aspect-video`).
- Duas formas para tudo: pílula `{rounded.full}` para ações e chips, `{rounded.md}` (8px) para
  cards e imagens. Diálogos usam `{rounded.lg}`.

## Colors

A paleta é neutra e escura nas bordas, branca no meio, com dois acentos que nunca disputam o
mesmo papel.

### Marca e ação
- **Violeta Épico** (`{colors.primary}` — `#5b3fd9`): ação primária de navegação, chip de
  filtro ativo, badge, superfície do rodapé. Texto branco por cima (6,6:1).
- **Violeta pressionado** (`{colors.primary-pressed}` — `#4a30bd`): hover e pressionado do
  botão primário; também é a cor de link em faixa clara (`{colors.link-light}`).
- **Violeta ativo** (`{colors.primary-active}` — `#3a2596`): estado ativo profundo.
- **Violeta claro** (`{colors.link-dark}` — `#b3a1ff`): link e anel de foco em faixa escura,
  onde o violeta cheio não teria contraste de texto.
- **Ouro Lendário** (`{colors.commerce}` — `#f5b400`): exclusivo de compra/contato para
  comprar. Texto `{colors.on-commerce}` (`#1a1300`) por cima. É a única cor quente do sistema.
- **Ouro pressionado** (`{colors.commerce-pressed}` — `#d99e00`).

### Superfícies
- **Canvas escuro** (`{colors.canvas-dark}` — `#08080b`): faixas escuras, navegação, fundo da página.
- **Escuro elevado** (`{colors.surface-dark-elevated}` — `#111117`): painéis internos em faixa escura.
- **Card escuro** (`{colors.surface-dark-card}` — `#191921`): busca do topo, popover, cards em faixa escura.
- **Paddle** (`{colors.paddle-dark}` — `#26262f`): botões circulares sobre faixa escura (pausar, música).
- **Canvas claro** (`{colors.canvas-light}` — `#ffffff`): faixas claras, diálogos, gaveta de filtros.
- **Suave** (`{colors.surface-soft}` — `#f2f1f6`): chip de filtro em repouso, fundo de imagem carregando.
- **Card claro** (`{colors.surface-card}` — `#f6f5fb`): cards em faixa clara, levemente violeta.

### Texto
- **Ink** (`{colors.ink}` — `#0b0b10`): títulos e texto principal em faixa clara.
- **Corpo claro** (`{colors.body-light}` — `#4a4a55`): parágrafos em faixa clara.
- **Mudo claro** (`{colors.mute-light}` — `#6b6b76`): metadados (classe, level), legendas.
- **Cinza claro** (`{colors.ash-light}` — `#cfcfd8`): desabilitado.
- **Sobre escuro** (`{colors.on-dark}` — `#ffffff`): títulos em faixa escura.
- **Corpo escuro** (`{colors.body-dark}` — `#c4c4cf`): parágrafos em faixa escura.
- **Mudo escuro** (`{colors.mute-dark}` — `#8f8f9c`): metadados em faixa escura.

### Linhas e semântica
- **Linha clara** (`{colors.hairline-light}` — `#e7e6ee`) e **linha escura**
  (`{colors.hairline-dark}` — `#2a2a35`): divisórias de 1px dentro de um capítulo, nunca entre capítulos.
- **Alerta** (`{colors.warning}` — `#d0213f`): erros de formulário.

## Typography

Uma família só: **Manrope** (Google Fonts, variável 300–700, com acentos do português). Títulos
em peso **300**: é a voz da marca, leve e editorial, que deixa o print ser o protagonista.
Botões em 700. O contraste entre um título de 300 e um botão de 700 na mesma linha é intencional.

| Token | Tamanho | Peso | Altura | Uso |
|---|---|---|---|---|
| `{typography.display-wordmark}` | 104px | 300 | 1 | Nome no rodapé (`footer-wordmark`), fechamento da página |
| `{typography.display-xl}` | 54px | 300 | 1.15 | Título do hero (só um por página) |
| `{typography.display-lg}` | 44px | 300 | 1.2 | Título de capítulo ("Todas as contas") e título da conta |
| `{typography.display-md}` | 35px | 300 | 1.25 | Título de seção na página da conta ("Descrição e atributos") |
| `{typography.heading-xl}` | 28px | 300 | 1.25 | Subtítulo de capítulo, título do diálogo |
| `{typography.heading-lg}` | 22px | 400 | 1.3 | Título de card grande, estado vazio |
| `{typography.heading-md}` | 18px | 600 | 1.35 | Título do card de conta, seção de atributos |
| `{typography.body-md}` | 18px | 400 | 1.5 | Texto de apoio (rodapé, 404, Recompensas) |
| `{typography.body-strong}` | 18px | 600 | 1.3 | Ênfase |
| `{typography.body-sm}` | 16px | 400 | 1.5 | Corpo padrão, atributos |
| `{typography.caption-md}` | 14px | 500 | 1.5 | Metadados, links do rodapé, navegação |
| `{typography.caption-sm}` | 12px | 600 | 1.4 | Badge, contadores |
| `{typography.price-lg}` | 28px | 600 | 1.1 | Preço na prévia e na página da conta |
| `{typography.price-md}` | 20px | 600 | 1.1 | Preço no card |
| `{typography.button-lg}` | 16px | 700 | 1.25 | Botão pílula de 48px |
| `{typography.button-md}` | 14px | 700 | 1.25 | Chip de filtro, botão compacto |

Preços sempre com algarismos tabulares (`"tnum"`). Títulos usam `text-wrap: balance`. Os
displays são fluidos: 54px no desktop, ~32px no celular, ~28px em 320px.

## Layout

- **Base de 8px**, com meios-passos de 4px e 12px.
- **Container:** `{spacing.container}` (1280px) de largura máxima; margens laterais de 16px no
  celular, 24px no tablet, 48px no desktop.
- **Ritmo de capítulo:** `{spacing.section}` (96px) desktop → `{spacing.section-tablet}` (64px)
  → `{spacing.section-mobile}` (48px).
- **Grade de contas:** 4 colunas (≥1280px) → 3 (≥1024px) → 2 (≥640px) → 1, colunas iguais com
  48px de vão e uma `rhythm-line` (1px `{colors.hairline-light}`) no meio do vão, contínua entre
  as linhas da grade. Sem caixas em volta dos cards.
- **Hero:** texto à esquerda (6/12) alinhado à base do print; print à direita (6/12) sangrando pela
  borda direita da tela, com altura `min(600px, 100svh − 260px)` para caber num notebook
  1366×768. Miniaturas sob o texto, legenda sob o print. No celular, uma coluna: texto, print,
  miniaturas, legenda.
- **Deslocamento editorial:** cabeçalhos de capítulo põem o título à esquerda (6–7/12) e o apoio
  (frase, preço, ações) à direita (4–5/12), alinhados pela base.
- **Navegação:** `{spacing.nav-height}` (64px), fixa no topo. No catálogo, a barra de filtros
  fica fixa logo abaixo dela no desktop.
- Colunas de texto corrido não passam de ~60 caracteres.

## Elevation & Depth

Plano. A profundidade vem da troca de faixa e do próprio print.

| Nível | Tratamento | Uso |
|---|---|---|
| 0 — Plano | Sem borda, sem sombra | Faixas, cards em repouso, rodapé |
| 1 — Linha | 1px `{colors.hairline-light}` / `{colors.hairline-dark}` | Divisórias internas, barra de filtros fixa |
| 2 — Diálogo | Sombra `0 24px 64px rgba(0,0,0,0.35)` | Só diálogos e popovers, que flutuam sobre a página |

Cards nunca têm sombra em repouso. No hover, o print dentro do card cresce 3%; o card não sobe.

## Shapes

Vocabulário de duas formas, mais uma rara:

| Token | Valor | Uso |
|---|---|---|
| `{rounded.none}` | 0px | Faixas, navegação, rodapé, gaveta |
| `{rounded.sm}` | 4px | Campos de texto |
| `{rounded.md}` | 8px | Cards, prints, miniaturas, popovers |
| `{rounded.lg}` | 16px | Diálogo de prévia |
| `{rounded.full}` | 9999px | Todo botão, chip, badge, paddle |

Prints são sempre 16:9 com `object-cover` e `{rounded.md}`. No diálogo de ampliar, o print
aparece inteiro (`object-contain`).

## Components

Estados de hover existem e sempre **aumentam** contraste (fundo mais escuro no violeta, mais
claro no escuro, sublinhado no link). Foco visível em tudo: anel de 2px em `{colors.primary}`
na faixa clara, `{colors.link-dark}` na escura e branco na faixa da marca.

### Botões
- **`button-primary`**: pílula de 48px, `{colors.primary}`, texto branco, `{typography.button-lg}`.
  "Ver as 27 contas", "Ver resultados", "Limpar filtros". Hover/pressionado em `{colors.primary-pressed}`.
- **`button-commerce`**: mesma forma em `{colors.commerce}` com texto `{colors.on-commerce}`.
  Só compra: "Tenho interesse", "Comprar no WhatsApp", "Enviar todos no WhatsApp".
- **`button-secondary-light`** / **`button-secondary-dark`**: pílula vazada com borda de 1px
  (`{colors.ash-light}` / `{colors.hairline-dark}`). Ações de apoio: "Falar no WhatsApp" no
  hero, "Abrir página da conta", "Fazer uma oferta".
- Ícone + texto: ícone de 16px à esquerda, decorativo (`aria-hidden`).

### Busca e campos
- **`search-bar-dark`**: pílula de 44px no topo, lupa à esquerda, botão de limpar de 40px à direita.
- **`text-input`**: 48px, `{rounded.sm}`, borda 1px `{colors.ash-light}`; foco troca para 2px
  `{colors.primary}`. Rótulo sempre visível acima.

### Chips de filtro
- **`filter-pill`** em repouso (`{colors.surface-soft}`) e **`filter-pill-active`**
  (`{colors.primary}`, texto branco). Toggle com `aria-pressed`. Contagem ao lado do nome.

### Card de conta (`account-tile`)
- Sem caixa: o print 16:9 em `{rounded.md}` é o card. Abaixo, título em
  `{typography.heading-md}` (2 linhas no máximo), uma linha de fatos em `{typography.caption-md}`
  `{colors.mute-light}` ("Taoist · Lv 140" + um fato curto como "Rune Points 258.100", tirado dos
  atributos; some se não houver), e na base o preço em `{typography.price-md}` com o link "Ver detalhes".
- Sobre o print: `badge-info` no canto superior esquerdo (só badges que informam algo),
  botão de favorito circular de 40px no superior direito.
- O título é o botão que abre a prévia e cobre o card inteiro; print (ampliar), favorito e
  "Ver detalhes" ficam por cima.

### Hero da home (`hero-band-dark`)
- Título `{typography.display-xl}` em até 3 linhas, com `text-wrap: balance` ("Contas disponíveis
  à venda ou negociação"), sem texto de apoio: o print é o argumento. Entre 1024 e 1279px, onde a
  coluna é mais estreita, desce para `{typography.display-lg}` para não passar de 3 linhas. `button-primary` +
  `button-secondary-dark` 32px abaixo, 12px entre si. A coluna de texto tem 32px de folga à
  direita para o `crop-frame` que avança sobre ela.
- O print da conta em destaque, grande, sangrando pela direita. Dois `crop-frame` (closes do
  próprio print: painel de atributos 248×156 e roda de runas 184×184, borda de 4px
  `{colors.canvas-dark}`) sobrepostos à borda esquerda do print, ancorados à base. Só no desktop.
- Sob o texto: `thumb-strip-item` (96px, ativa com anel branco) + `carousel-paddle` de pausa.
- Sob o print: título, metadados com fatos, preço e link "Ver esta conta" em `{colors.link-dark}`.

### Diálogos
- **`dialog-card`** (prévia): branco, `{rounded.lg}`, até 1120px, duas colunas no desktop.
  Esquerda (7/12): print 16:9 e um `gallery-bento` de três closes quadrados logo abaixo (2px entre
  eles). Direita (5/12): badge, título `{typography.heading-xl}`, metadados, preço
  `{typography.price-lg}`, até 5 destaques em `attribute-row`, link "Ver todos os atributos" e,
  na base, `button-commerce` + `button-secondary-light` + link de oferta. Sem rolagem interna.
- **Ampliar print**: fundo `{colors.canvas-dark}` a 95%, print inteiro, paddle de fechar.
- Esc fecha, foco preso, foco volta para quem abriu.

### Gaveta de filtros (`drawer`)
- Clara, entra pela direita, ocupa a tela no celular. Seções com rótulo em
  `{typography.caption-sm}` maiúsculo. Rodapé com "Limpar" (secundário) e "Aplicar filtros" (primário).

### Navegação (`primary-nav`)
- 64px, escura. Logo + nome à esquerda, busca em pílula, idioma (PT/EN), interesses (círculo
  de 40px com contador em `badge-info`), menu no celular. Popover de interesses em `popover-dark`.

### Rodapé (`footer-section`)
- Faixa da marca de ponta a ponta. `footer-wordmark` (`{typography.display-wordmark}`) com o
  mascote no topo à esquerda, frase curta (5/12), duas colunas de links à direita separadas por
  uma linha de ritmo em branco a 20%, linha fina com © no fim.

### Página da conta
- Faixa escura, em deslocamento editorial e sem caixa: título `{typography.display-lg}` com chips
  vazados (classe, level, fatos) à esquerda (7/12); "Valor", preço `{typography.price-lg}`,
  `button-commerce` e `button-secondary-dark` à direita (4/12), alinhados pela base.
- `gallery-bento`: print (2/3, abre o ampliar) + dois closes do mesmo print empilhados (1/3), 2px
  entre eles, um só contêiner `{rounded.md}`. No celular, os closes viram uma fileira de dois.
- Linha de garantias com ícone em `{colors.link-dark}`.
- Faixa clara: atributos em colunas abertas (3 no desktop) separadas por `rhythm-line`, cada item
  um `attribute-row` com `divider-light`; depois trilhos de contas relacionadas com `account-tile`.

### Formulários (Recompensas)
- `text-input` com rótulo sempre visível acima, borda `text-input-border` e dica abaixo em
  `{typography.caption-md}`. Erro em `field-error`, anunciado (`role="alert"`) e com o próximo passo.
- Botão de enviar fica habilitado até a requisição começar; durante, mostra "Verificando…".
- Abas como `filter-pill`; confirmação de exportação em `dialog-card` pequeno.

### Implementação
- Tokens: `src/design/tokens.json`, gerado com `npm run design:tokens` e lido pelo `tailwind.config.ts`.
  Validação: `npm run design:lint`.
- Classes com o nome dos componentes em `src/index.css`: `.band-dark`, `.band-light`, `.band-brand`,
  `.btn` + `.btn-primary` / `.btn-commerce` / `.btn-secondary-light` / `.btn-secondary-dark`,
  `.filter-pill`, `.paddle`, `.badge-info`, `.link-light`, `.link-dark`, `.text-input`,
  `.rhythm-grid` / `.rhythm-cols` (grade com `rhythm-line`), `.crop-frame`, `.bleed-right`.
- Closes do print: presets em `src/lib/printCrops.ts` (zoom + ponto de mira). Fatos curtos:
  `src/lib/highlights.ts` (BP, Rune Points, Perfection tirados dos atributos).

## Do's and Don'ts

### Faça
- Faça a troca de faixa ser o divisor entre capítulos, com `{spacing.section}` de respiro.
- Use `{colors.commerce}` apenas onde o clique leva à compra (WhatsApp de interesse/compra).
- Use `{colors.primary}` com parcimônia: uma ação primária por bloco, uma faixa da marca por página.
- Mantenha títulos em peso 300 e botões em 700.
- Mantenha prints em 16:9, `{rounded.md}`, ocupando a maior parte do card.
- Use closes do próprio print (`crop-frame`, `gallery-bento`) como imagem de apoio, nunca imagens de enfeite.
- Separe colunas com `rhythm-line` em vez de caixas; evite card dentro de card.
- Mantenha alvos de toque ≥ 44px (botões de 48px, chips de 40px com respiro, paddles de 48px).
- Mantenha contraste AA: texto em faixa escura usa `{colors.on-dark}`, `{colors.body-dark}` ou
  `{colors.link-dark}`, nunca `{colors.primary}` como cor de texto.

### Não faça
- Não ponha sombra em card parado nem gradiente em interface (só os prints têm cor).
- Não use ouro em navegação, badges ou hero.
- Não use outro raio além de 0, 4, 8, 16 e pílula.
- Não use caixa alta em títulos; caixa alta só nos rótulos `{typography.caption-sm}` da gaveta.
- Não ponha texto sobre o print, exceto badge e controles circulares.
- Não crie uma segunda faixa violeta na mesma página.
- Não use a cor ou a fonte de outra marca; a estrutura é inspirada, a identidade é nossa.
