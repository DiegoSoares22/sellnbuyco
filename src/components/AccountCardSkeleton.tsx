import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const AccountCardSkeleton: React.FC = () => {
  return (
    <div className="bg-[#12121a] rounded-2xl border border-zinc-800/80 overflow-hidden flex flex-col h-full space-y-3 p-4">
      {/* Imagem Placeholder */}
      <Skeleton className="aspect-[4/3] w-full rounded-xl bg-zinc-800" />

      {/* Conteúdo */}
      <div className="space-y-2 flex-1 flex flex-col">
        {/* Título */}
        <Skeleton className="h-4 w-5/6 bg-zinc-800" />
        <Skeleton className="h-4 w-2/3 bg-zinc-800" />

        {/* Preço */}
        <Skeleton className="h-6 w-1/3 bg-zinc-800 mt-auto" />

        {/* Botão Ver Detalhes */}
        <Skeleton className="h-9 w-full rounded-xl bg-zinc-800 pt-1.5" />

        {/* Botões de Ação */}
        <div className="flex gap-2 pt-0.5">
          <Skeleton className="h-8.5 flex-1 rounded-xl bg-zinc-800" />
          <Skeleton className="h-8.5 flex-1 rounded-xl bg-zinc-800" />
        </div>
      </div>
    </div>
  );
};
