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

/** Filters by a price range in K CPS (inclusive). Accounts without CPS price kept. */
export function filterByPriceRange(
  accounts: AccountListing[],
  minK: number | null,
  maxK: number | null
) {
  if (minK == null && maxK == null) return accounts;
  return accounts.filter((a) => {
    const price = getMinCpsK(a);
    if (price === null) return true;
    if (minK != null && price < minK) return false;
    if (maxK != null && price > maxK) return false;
    return true;
  });
}

/** Returns [minK, maxK] across all accounts that have CPS pricing. */
export function getPriceRange(accounts: AccountListing[]): [number, number] {
  let min = Infinity;
  let max = 0;
  for (const a of accounts) {
    const p = getMinCpsK(a);
    if (p !== null) {
      if (p < min) min = p;
      if (p > max) max = p;
    }
  }
  if (!isFinite(min)) return [0, 100];
  return [Math.floor(min), Math.ceil(max)];
}

/**
 * Builds "up to X k CPs" buckets dynamically from the actual accounts, so we
 * never show a bucket that has zero matches.
 */
export function getCpsBuckets(accounts: AccountListing[]): number[] {
  const candidates = [5, 10, 15, 20, 30, 40, 50, 75, 100];
  const buckets: number[] = [];
  let prevCount = -1;
  for (const b of candidates) {
    const count = filterByBudget(accounts, b).length;
    if (count > 0 && count !== prevCount) {
      buckets.push(b);
      prevCount = count;
    }
  }
  return buckets;
}

/** Character-level heuristic. Reads the title first, then falls back to attribute lines. */
export function getAccountLevel(account: AccountListing): number | null {
  const sources: string[] = [account.title];
  for (const sec of account.sections) for (const it of sec.items) sources.push(it);

  const patterns = [
    /\b(?:lv|lvl|level)\.?\s*(\d{2,3})\b/i,
    /\b(1[0-4]\d|99)\b/,
  ];
  for (const src of sources) {
    for (const re of patterns) {
      const m = src.match(re);
      if (m) {
        const n = parseInt(m[1], 10);
        if (n >= 90 && n <= 160) return n;
      }
    }
  }
  return null;
}

export type LevelBucket = { key: string; label: string; test: (lvl: number) => boolean };

export const LEVEL_BUCKETS: LevelBucket[] = [
  { key: "99", label: "Level 99", test: (l) => l >= 99 && l < 110 },
  { key: "119", label: "Level 119", test: (l) => l >= 110 && l < 125 },
  { key: "129", label: "Level 129", test: (l) => l >= 125 && l < 130 },
  { key: "130+", label: "Level 130+", test: (l) => l >= 130 },
];

export function getAvailableLevelBuckets(accounts: AccountListing[]) {
  return LEVEL_BUCKETS.map((b) => ({
    ...b,
    count: accounts.filter((a) => {
      const l = getAccountLevel(a);
      return l !== null && b.test(l);
    }).length,
  })).filter((b) => b.count > 0);
}

export function filterByLevelBucket(accounts: AccountListing[], bucketKey: string | null) {
  if (!bucketKey) return accounts;
  const b = LEVEL_BUCKETS.find((x) => x.key === bucketKey);
  if (!b) return accounts;
  return accounts.filter((a) => {
    const l = getAccountLevel(a);
    return l !== null && b.test(l);
  });
}

export function filterByLevelBuckets(accounts: AccountListing[], bucketKeys: string[]) {
  if (!bucketKeys.length) return accounts;
  const buckets = LEVEL_BUCKETS.filter((x) => bucketKeys.includes(x.key));
  if (!buckets.length) return accounts;
  return accounts.filter((a) => {
    const l = getAccountLevel(a);
    return l !== null && buckets.some((b) => b.test(l));
  });
}

