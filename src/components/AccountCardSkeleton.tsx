import React from "react";

/** Mesmo formato do account-tile do DESIGN.md: print 16:9 e texto abaixo. */
export const AccountCardSkeleton: React.FC = () => {
  return (
    <div className="flex h-full flex-col" aria-hidden="true">
      <div className="aspect-video w-full rounded-md bg-surface-soft" />
      <div className="flex flex-1 flex-col gap-xs pt-md">
        <div className="h-4 w-5/6 rounded-sm bg-surface-soft" />
        <div className="h-4 w-2/3 rounded-sm bg-surface-soft" />
        <div className="mt-md h-5 w-1/3 rounded-sm bg-surface-soft" />
      </div>
    </div>
  );
};
