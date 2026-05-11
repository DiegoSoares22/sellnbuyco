## Adicionar 5 novos accounts em /accounts

Vou adicionar 5 listings ao marketplace, copiando as imagens enviadas para `src/assets/` e criando as entradas em `src/data/accounts.ts`.

### Imagens a copiar
- `user-uploads://Archer_Epic.png` → `src/assets/archer-epic.png`
- `user-uploads://Archer_rune.png` → `src/assets/archer-rune.png`
- `user-uploads://catwater.png` → `src/assets/decente-water.png`
- `user-uploads://Pirate_12.png` → `src/assets/pirata-intermediario.png`
- `user-uploads://my_pirate.png` → `src/assets/top-pirate.png`

### Novos listings (acc-19 a acc-23)

| ID | Título | Preço | Classe | Badge |
|----|--------|-------|--------|-------|
| acc-19 | Decente Archer Epic | 38K CPS | Archer | Epic |
| acc-20 | Archer Intermediário | 95K CPS | Archer | Intermediário |
| acc-21 | Decente Water | 105K CPS | Taoist (Water) | Decente |
| acc-22 | Pirata Intermediário | 125K CPS | Pirate | Intermediário |
| acc-23 | TOP Pirate | $4550 USD | Pirate | TOP |

Como os textos enviados foram apenas título + preço (sem listas detalhadas de runas/equipamentos), vou inferir atributos básicos a partir das screenshots anexadas (level, classe, P-Strike, Break, runa points, gear destacado como Unbound, Relic, Gold Trophy, etc.) para preencher as seções mantendo o mesmo formato visual dos outros cards.

### Caso queira ajustar
Se preferir descrições mínimas (apenas título + preço, sem seções de atributos extraídas das imagens), me avise antes de implementar.