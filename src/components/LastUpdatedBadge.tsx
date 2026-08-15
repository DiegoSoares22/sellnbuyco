import { RefreshCw } from "lucide-react";
import { useI18n } from "@/i18n";

/**
 * Data/hora (horário de Brasília) da última atualização do catálogo.
 * Atualizar manualmente sempre que novos anúncios forem publicados.
 */
export const LAST_UPDATED_BR = "15/08 às 12:29";

export function LastUpdatedBadge({ className = "" }: { className?: string }) {
  const { lang } = useI18n();

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-[11px] font-semibold text-emerald-400 backdrop-blur-sm ${className}`}
      title={lang === "pt" ? "Horário de Brasília (GMT-3)" : "Brasília time (GMT-3)"}
    >
      <RefreshCw size={12} className="opacity-80" />
      {lang === "pt" ? "Atualizado em" : "Updated on"} {LAST_UPDATED_BR}
      <span className="text-emerald-500/60">BRT</span>
    </span>
  );
}

export default LastUpdatedBadge;
