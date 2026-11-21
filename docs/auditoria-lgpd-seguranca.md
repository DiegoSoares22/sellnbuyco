# Auditoria de segurança, privacidade (LGPD) e conformidade — SellNBuyCO

Data: 20/11/2026 · Escopo: código deste repositório, `vercel.json`, migrations do Supabase e uma checagem
somente-leitura da produção (https://sellnbuyco.vercel.app).

> Este documento é técnico. Os textos jurídicos (Privacidade, Termos, Cookies) foram escritos a partir do que o
> código faz, mas **não substituem revisão por advogado(a)**, principalmente nos pontos L1, L2 e L4.

---

## 0. Antes de publicar (nesta ordem)

1. **Aplicar a migration `supabase/migrations/20261120210000_lock_rewards_rls.sql` no Supabase.** Em produção a
   função `get_rewards_summary` ainda não existe (a chamada devolve 404). Se o frontend novo subir antes, a
   página Recompensas para de responder.
2. **Preencher `src/lib/legal.ts`** (nome ou razão social, CPF/CNPJ, endereço, e-mail) e os demais itens
   marcados como "a preencher" nas páginas (lista completa na seção 5). Eles aparecem em destaque amarelo.
3. **Decidir sobre as alegações da página da conta** (achado L1) e **sobre a roleta** (achado L2).
4. Revisão jurídica dos três textos.

---

## 1. Como o sistema funciona hoje

| Item | O que há |
|---|---|
| Stack | React 18 + Vite + TypeScript + Tailwind, SPA estática na Vercel; Supabase (Postgres + PostgREST) |
| Catálogo | Fixo no código (`src/data/accounts.ts`), imagens importadas do projeto |
| Login / cadastro | Não existe. `/admin` mostra um formulário de senha que nunca autentica |
| Pagamento no site | Não existe. Negociação, pagamento (Pix/cartão) e entrega pelo WhatsApp |
| Formulários com dado pessoal | Só a consulta de Recompensas (ID da conta no jogo + nome + sobrenome) |
| Banco | `users_rewards` (ID, nome), `transactions` (ID, valor em CPs, método, mês), `rewards`, `accounts_marketplace` (não usada pelo site) |
| Armazenamento no navegador | `sellnbuy_favs` (lista de interesses), `snb_consent` (novo: escolha de cookies) |
| Terceiros | Vercel (hospedagem), Supabase (banco), Google Fonts (toda visita), YouTube (música, só com consentimento), WhatsApp/Meta (links) |
| Analytics / anúncios | Nenhum script. `public/ads.txt` declara uma conta do Google AdSense, mas nenhum script de anúncio é carregado |

---

## 2. Achados

Severidade: **Alta** = risco real a dados ou jurídico relevante; **Média** = deve ser resolvido; **Baixa** = melhoria.

### Segurança

| ID | Sev. | Achado | Status |
|---|---|---|---|
| S1 | Alta | Políticas RLS `Anyone can read` em `users_rewards`, `transactions` e `rewards`: qualquer um com a chave pública (que vai no bundle) podia baixar nomes, IDs e compras de todos os clientes pela API REST. | **Corrigido no código, falta aplicar em produção.** A migration remove as políticas e cria `get_rewards_summary` (SECURITY DEFINER, `search_path` fixo, limite de tamanho, mesma resposta para ID inexistente e nome errado). Checagem em produção feita só com contagem, sem baixar linhas: as quatro tabelas devolvem 0 registros para a chave pública, ou seja, estão vazias ou já bloqueadas. Hoje não há vazamento observável. |
| S2 | Média | Produção sem cabeçalhos de segurança (só o HSTS padrão da Vercel). | **Corrigido** em `vercel.json`: CSP **em modo de bloqueio**, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, `COOP`, HSTS de 2 anos. A CSP foi testada servindo o build de produção com esses cabeçalhos: catálogo, prévia, página da conta, Recompensas, páginas legais e o player do YouTube rodaram sem nenhuma violação. Para voltar ao modo só-relatório, renomeie a chave para `Content-Security-Policy-Report-Only`. |
| S3 | Média | Dependências com vulnerabilidades conhecidas que vão para o navegador: `react-router-dom` 6.30.1 (open redirect, GHSA-2w69-qvjg-hvjx; o app não usa redirects com destino vindo do usuário, então o risco aqui é baixo), `xlsx` 0.18.5 (sem correção no npm; as falhas são na leitura de planilhas, e o app só escreve), `dompurify` via `jspdf` (o app não usa o caminho afetado). | **Pendente.** Rodar `bun update react-router-dom jspdf`. Para o `xlsx`, trocar pela versão do CDN oficial do SheetJS ou exportar CSV. As demais (glob, postcss, nanoid etc.) são ferramentas de build. |
| S4 | Baixa | A consulta de Recompensas não tem limite de tentativas: quem sabe um ID pode tentar adivinhar o nome. | **Pendente.** Risco baixo (precisa do ID e do nome completo). Opção: tabela de tentativas por ID com bloqueio temporário dentro da própria função, ou CAPTCHA (Cloudflare Turnstile) numa Edge Function. |
| S5 | Baixa | `/admin` exibe um formulário de senha que nunca autentica, e os inserts do painel seriam barrados pela RLS de qualquer forma. | **Pendente (decisão).** Remover a rota ou implementar Supabase Auth com políticas por papel. Hoje os dados devem estar sendo lançados pelo painel do Supabase. |
| S6 | Info | Chave publicável do Supabase no bundle. | Esperado: a proteção é a RLS (S1). Nenhuma chave `service_role` no código nem no histórico do git; `.env` está no `.gitignore` e nunca foi commitado. |
| S7 | Info | Confirmar no painel: 2FA ativo nas contas da Vercel, do Supabase e do GitHub, e acesso ao banco só pelo responsável. A Política de Privacidade afirma isso. | **Pendente (verificar).** |

### Privacidade e LGPD

| ID | Sev. | Achado | Status |
|---|---|---|---|
| P1 | Alta | Sem Política de Privacidade, Termos ou aviso de cookies. | **Implementado:** `/privacidade`, `/termos`, `/cookies` (e `/en/...` com resumo em inglês), links no rodapé. |
| P2 | Média | Player do YouTube (Google) carregado sem consentimento. | **Corrigido:** domínio `youtube-nocookie.com`, o iframe só é criado após consentimento ("Marketing e conteúdo de terceiros"), com pergunta na hora do clique, e é removido se o consentimento for retirado. `dns-prefetch` para youtube.com removido. |
| P3 | Média | Google Fonts recebe o IP de todo visitante antes de qualquer aviso. | **Divulgado** nas políticas. **Recomendado:** hospedar a fonte no próprio site (`bun add @fontsource-variable/manrope`, importar em `main.tsx`, tirar os `<link>` do `index.html` e `fonts.googleapis.com`/`fonts.gstatic.com` da CSP) e atualizar as políticas. |
| P4 | Média | Consulta de Recompensas coleta nome e ID sem aviso no ponto de coleta. | **Corrigido:** aviso curto com link para a política (`Rewards.tsx`). |
| P5 | Média | Sem identificação do responsável (LGPD art. 9º; Decreto 7.962/2013 art. 2º exige nome, CPF/CNPJ e endereços em destaque). | **Pendente:** preencher `src/lib/legal.ts`. Depois, considere mostrar nome e CPF/CNPJ no rodapé. |
| P6 | Média | Sem regra de guarda e eliminação dos registros de clientes. | **Regra publicada** na política: até 5 anos após a última compra (CDC art. 27). **Pendente:** cumprir. Consulta para revisar os candidatos uma vez por ano (só lista, não apaga): veja o SQL abaixo. |
| P7 | Baixa | Prova do consentimento (art. 8º, § 2º) fica só no navegador do visitante. | Proporcional hoje (o único item opcional é a música, que o próprio visitante aciona). Se entrar analytics ou anúncios, considerar um registro anônimo no servidor (ID aleatório, escolhas, versão, data, sem IP). |

```sql
-- Clientes sem compra há mais de 5 anos (revise antes de apagar ou anonimizar)
SELECT u.account_id, u.name, MAX(t.created_at) AS ultima_compra
FROM public.users_rewards u
LEFT JOIN public.transactions t ON t.account_id = u.account_id
GROUP BY u.account_id, u.name
HAVING COALESCE(MAX(t.created_at), MIN(u.created_at)) < now() - interval '5 years';
```

### Consumidor, propriedade intelectual e jogo

| ID | Sev. | Achado | Status |
|---|---|---|---|
| L1 | Alta | Toda página de conta exibe "Intermediação segura / **Secure escrow**", "Vendedor verificado" e "Transferência garantida" (`src/components/AccountDetailPage.tsx:58`). O sistema não tem escrow nem verificação de vendedor. Alegação sem lastro pode ser publicidade enganosa (CDC art. 37, § 1º), e "garantida" vira obrigação (art. 30). | **Pendente (decisão).** Se as práticas existirem, descreva-as nos Termos (há um "a preencher" na seção 6). Se não, troque por frases verificáveis (ex.: "Prints da própria conta", "Negociação direta pelo WhatsApp"). O "Secure escrow" em inglês é a mais arriscada. |
| L2 | Alta | Roleta de recompensas sorteada no navegador (`Math.random`), sem registro: dá para girar várias vezes recarregando a página, e a tela diz "Você ganhou X". Sorteio de prêmios vinculado a compra pode exigir autorização prévia do Ministério da Fazenda (Lei 5.768/1971), e o resultado exibido pode ser cobrado como oferta (CDC art. 30). As chances no `/admin` somam 118% (60 + 45 + 10 + 3). | **Pendente (decisão + jurídico).** Recomendado: tirar a roleta do ar até o sorteio ser feito no servidor, uma vez por cliente e registrado, com regulamento publicado e análise jurídica sobre autorização. |
| L3 | Média | Os termos oficiais do jogo podem proibir a venda de contas e moedas fora do jogo. | **Divulgado** nos Termos (seção 4), sem cláusula que tire direitos do consumidor. |
| L4 | Média | Direito de arrependimento (CDC art. 49 e Decreto 7.962/2013 art. 5º) não era informado. | **Informado** nos Termos (seção 6). Confirme que a operação consegue cumprir: 7 dias, com devolução do acesso à conta. |
| L5 | Baixa | Uso de nome e prints do jogo sem aviso de independência. | **Corrigido:** aviso no rodapé e nos Termos (seção 3). |

### Acessibilidade (WCAG 2.2 AA)

| ID | Achado | Status |
|---|---|---|
| A1 | Campo de senha do `/admin` sem nome acessível. | **Corrigido** (`aria-label`). |
| A2 | Componentes novos | Feitos com: aviso de cookies primeiro no DOM, diálogo com foco preso e devolvido a quem abriu, switch com rótulo e descrição, popover rotulado, tabelas com `caption` e `scope`, `lang="pt-BR"` no texto em português das rotas `/en`, contraste dos tokens do DESIGN.md, alvos ≥ 40px. Testado com teclado e em 375px sem rolagem lateral. |
| A3 | Já existia e está bom | Link "pular para o conteúdo", `aria-live` nos erros, anel de foco por faixa, `prefers-reduced-motion`, labels visíveis no formulário. |
| A4 | Recompensas: erro com `role="alert"` dentro de `aria-live` (alguns leitores anunciam duas vezes). | Pendente, baixo. |
| A5 | Recompensas e `/admin` só em português, inclusive nas rotas `/en`. | Pendente, baixo. |
| A6 | Não foi feita varredura automática (axe) nem teste com leitor de tela real. | Recomendado antes de considerar a auditoria de acessibilidade completa. |

### Higiene de código (sem impacto hoje)

- Componentes e dados que não são importados por nada (não entram no bundle): `ItemGrid`, `ItemCard`,
  `CategoryFilter`, `GamerTips`, `WelcomePopup`, `ThemeToggle`, `src/data/items.ts`, `src/lib/userPrefs.ts`. Se
  algum voltar: `items.ts` usa imagens de `hsimages.99.com` (bloqueadas pela CSP) e os outros gravam no
  `localStorage`, o que precisaria entrar na Política de Cookies.
- `package-lock.json` está desatualizado em relação ao `package.json`; o lockfile real é o `bun.lock`.
- Dois erros de lint antigos em `src/pages/Rewards.tsx` (`prefer-const`, `no-explicit-any`).

---

## 3. Cookies e armazenamento

| Nome | Categoria | Quem grava | Precisa de consentimento |
|---|---|---|---|
| `snb_consent` | Essencial | SellNBuyCO (localStorage), 12 meses | Não |
| `sellnbuy_favs` | Essencial (função pedida pelo visitante) | SellNBuyCO (localStorage) | Não |
| Cookies e storage do YouTube | Marketing e conteúdo de terceiros | Google (`youtube-nocookie.com`) | **Sim**: só com permissão |

Preferências e Analíticos aparecem no painel como "Não usamos". **Ao adicionar qualquer ferramenta nova**
(AdSense, Analytics, Pixel): coloque-a na categoria certa, só carregue o script quando
`useConsent().granted(categoria)` for verdadeiro, aumente `CONSENT_VERSION` em `src/lib/consent.ts` (para perguntar
de novo) e atualize a Política de Cookies e a CSP.

---

## 4. O que mudou

| Arquivo | Mudança |
|---|---|
| `supabase/migrations/20261120210000_lock_rewards_rls.sql` | Fecha a leitura pública e cria `get_rewards_summary` (trabalho anterior, mantido) |
| `src/pages/Rewards.tsx` | Consulta via RPC (anterior) + aviso de privacidade no formulário |
| `vercel.json` | Cabeçalhos de segurança; CSP passou a bloquear |
| `src/lib/consent.ts` | Registro de consentimento: categorias, versão, validade de 12 meses, `useConsent()` |
| `src/components/CookieConsent.tsx` | Aviso (aceitar e rejeitar com o mesmo peso) + painel por categoria |
| `src/components/MusicPlayer.tsx` | YouTube só com consentimento; pergunta no clique; remove o iframe ao retirar |
| `src/pages/legal/*`, `src/components/legal/LegalPage.tsx` | Política de Privacidade, Termos de Uso, Política de Cookies (carregadas sob demanda) |
| `src/lib/legal.ts` | Dados do responsável (com pendências) e data da versão dos textos |
| `src/components/Footer.tsx` | Coluna "Legal", "Preferências de cookies" e aviso de independência |
| `src/App.tsx` | Rotas `/privacidade`, `/termos`, `/cookies` e espelhos `/en` |
| `src/pages/Admin.tsx`, `index.html` | Rótulo acessível; remoção do `dns-prefetch` do YouTube |
| `src/test/consent.test.ts` | 8 testes do registro de consentimento |

Verificado: `tsc` sem erros, 25/25 testes, build de produção, e teste no navegador do build servido com os
cabeçalhos do `vercel.json` (CSP bloqueando).

---

## 5. Pendências de preenchimento nas páginas

- Nome completo ou razão social, CPF/CNPJ, endereço e e-mail → `src/lib/legal.ts`
- Encarregado (DPO) ou a dispensa como agente de pequeno porte → Privacidade, seção 2
- Região do projeto no Supabase → Privacidade, seção 5
- Mecanismo de transferência internacional de cada fornecedor → Privacidade, seção 6
- Origem das contas (próprias ou intermediação de terceiros) → Termos, seção 2
- Titular da conta que recebe os pagamentos → Termos, seção 5
- Prazo de entrega → Termos, seção 5
- O que a "Transferência garantida" cobre → Termos, seção 6

Confirme também se a operação segue os prazos publicados na Política de Privacidade (seção 7). Se não seguir,
mude o texto antes de publicar.
