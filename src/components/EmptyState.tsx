import React from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";

interface EmptyStateProps {
  onClear: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClear }) => {
  const { lang } = useI18n();

  return (
    <div className="my-10 p-10 rounded-2xl border border-dashed border-zinc-800 bg-[#12121a]/30 text-center max-w-lg mx-auto">
      <div className="mx-auto w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mb-4">
        <Filter size={20} className="animate-pulse" />
      </div>
      <h3 className="text-base font-bold text-slate-100 mb-2">
        {lang === "pt" ? "Nenhuma account encontrada" : "No accounts found"}
      </h3>
      <p className="text-xs text-slate-400 mb-5 max-w-xs mx-auto leading-relaxed">
        {lang === "pt"
          ? "Nenhum resultado corresponde aos filtros aplicados. Tente limpar os filtros para ver todas as opções disponíveis."
          : "No accounts match the filters you have set. Try clearing the filters to see all available options."}
      </p>
      <Button
        onClick={onClear}
        className="rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs px-5 h-9.5"
      >
        {lang === "pt" ? "Limpar filtros" : "Clear filters"}
      </Button>
    </div>
  );
};
