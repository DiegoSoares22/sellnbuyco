import type { Lang } from "@/i18n";

/**
 * Data/hora da última atualização do catálogo, no horário de Brasília.
 * Atualizar manualmente sempre que novos anúncios forem publicados.
 * Formato: AAAA-MM-DDTHH:MM-03:00 (o -03:00 é o fuso de Brasília).
 */
export const LAST_UPDATED = "2026-10-18T23:08-03:00";

/** "15 de outubro de 2026 às 02:01" / "October 15, 2026 at 2:01 AM" */
export function formatLastUpdated(lang: Lang) {
  return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(LAST_UPDATED));
}
