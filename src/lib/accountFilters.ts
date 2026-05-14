import type { AccountListing } from "@/data/accounts";

/** Returns the minimum CPS price (in thousands) for an account, or null if none have CPS pricing. */
export function getMinCpsK(account: AccountListing): number | null {
  let min: number | null = null;
  for (const p of account.prices) {
    const m = p.value.match(/([\d.,]+)\s*K\s*CPS/i);
    if (m) {
      const n = parseFloat(m[1].replace(",", "."));
      if (!isNaN(n)) min = min === null ? n : Math.min(min, n);
    }
  }
  return min;
}

/**
 * Filters by budget in K CPS. Accounts without CPS price (e.g. "A combinar", USD)
 * are kept so the user still sees negotiable options.
 */
export function filterByBudget(accounts: AccountListing[], budgetK: number | null) {
  if (!budgetK || budgetK <= 0) return accounts;
  return accounts.filter((a) => {
    const min = getMinCpsK(a);
    return min === null || min <= budgetK;
  });
}
