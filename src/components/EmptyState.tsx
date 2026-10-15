import React from "react";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n";
import { buildWa } from "@/lib/whatsapp";

interface EmptyStateProps {
  onClear: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClear }) => {
  const { lang } = useI18n();

  const waHref = buildWa(
    lang === "pt"
      ? "Olá! Não achei no site a conta que procuro. Alguém está vendendo?"
      : "Hi! I couldn't find the account I'm looking for on the site. Is anyone selling one?",
  );

  return (
    <div className="my-xl max-w-xl rounded-md bg-surface-card p-lg sm:p-xl">
      <h3 className="text-heading-lg text-ink">
        {lang === "pt" ? "Nenhuma conta com esses filtros" : "No Accounts Match These Filters"}
      </h3>
      <p className="mt-xs text-pretty text-body-sm text-body-light">
        {lang === "pt"
          ? "Limpe os filtros para ver todas as contas à venda, ou pergunte no WhatsApp se alguém está vendendo o que você procura."
          : "Clear the filters to see every account for sale, or ask on WhatsApp whether someone is selling what you need."}
      </p>
      <div className="mt-lg flex flex-wrap items-center gap-sm">
        <button type="button" onClick={onClear} className="btn btn-primary">
          {lang === "pt" ? "Limpar filtros" : "Clear Filters"}
        </button>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-light">
          <MessageCircle size={16} aria-hidden="true" />
          {lang === "pt" ? "Perguntar no WhatsApp" : "Ask on WhatsApp"}
        </a>
      </div>
    </div>
  );
};
