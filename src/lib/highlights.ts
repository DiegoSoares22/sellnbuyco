import type { AccountListing } from "@/data/accounts";

// Ordem de preferência: o que mais diz sobre a conta em poucas letras
const PATTERNS: [RegExp, (m: RegExpMatchArray) => string][] = [
  [/\b(\d{3})\s*BP\b|B\.P\.:\s*(\d{3})/i, (m) => `${m[1] ?? m[2]} BP`],
  [/Rune Points:?\s*([\d.]+)/i, (m) => `Rune Points ${m[1]}`],
  [/Myth\s?soul:?\s*(\d+)/i, (m) => `Mythsoul ${m[1]}`],
];

/**
 * Fatos curtos para o card e as legendas ("488 BP", "Rune Points 421.700"), tirados do texto
 * dos atributos. Pula o que o título já diz. Sem padrão reconhecido, devolve lista vazia.
 */
export function getHighlights(account: AccountListing, max = 2): string[] {
  const text = account.sections.flatMap((s) => s.items).join("\n");
  const out: string[] = [];
  for (const [pattern, format] of PATTERNS) {
    const match = text.match(pattern);
    if (!match) continue;
    const fact = format(match);
    const number = fact.match(/[\d.]+/)?.[0];
    if (number && account.title.includes(number)) continue;
    out.push(fact);
    if (out.length >= max) break;
  }
  return out;
}
