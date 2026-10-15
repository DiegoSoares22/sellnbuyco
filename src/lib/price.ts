import type { AccountListing } from "@/data/accounts";

const LOCALE = { pt: "pt-BR", en: "en-US" } as const;

/**
 * Separa o preço de exibição em valor + moeda, com o número no formato do idioma.
 * "125K CPS" -> { amount: "125k", unit: "CPs" }
 * "$4550 USD" -> { amount: "$4.550" (pt) / "$4,550" (en), unit: "USD" }
 * "A combinar" -> { amount: "A combinar", unit: "" }  (antes virava "A" + "combinar")
 */
export function formatPrice(account: AccountListing, lang: "pt" | "en" = "pt") {
  const raw = (account.prices[0]?.value || "").trim();

  if (!raw) {
    return { amount: lang === "pt" ? "A combinar" : "Negotiable", unit: "", negotiable: true };
  }

  const match = raw.match(/^([$€R]*)\s?([\d.,]+)\s?([kKmM]?)\s*(.*)$/);
  if (!match) {
    const negotiable = /combinar|consultar|negoci/i.test(raw);
    return {
      amount: negotiable && lang === "en" ? "Negotiable" : raw,
      unit: "",
      negotiable,
    };
  }

  const [, symbol, digits, suffix, rest] = match;
  // "4.550" / "4,550" são milhar; "1,5" / "1.5" são decimal
  const value = Number(
    /^\d{1,3}([.,]\d{3})+$/.test(digits) ? digits.replace(/[.,]/g, "") : digits.replace(",", "."),
  );
  const number = Number.isFinite(value)
    ? new Intl.NumberFormat(LOCALE[lang], { maximumFractionDigits: 1 }).format(value)
    : digits;

  const amount = `${symbol}${number}${suffix === "K" ? "k" : suffix}`;
  const unit = /^cps?$/i.test(rest.trim()) ? "CPs" : rest.trim();
  return { amount, unit, negotiable: false };
}

/** Badges que aparecem em quase todos os anúncios não informam nada no card. */
export function meaningfulBadge(badge: string) {
  const b = badge.trim().toUpperCase();
  if (!b || b === "NOVO" || b === "NEW") return null;
  return badge.charAt(0).toUpperCase() + badge.slice(1).toLowerCase();
}
