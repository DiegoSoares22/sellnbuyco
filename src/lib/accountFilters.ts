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

export type LevelBucket = { key: string; label: string; labelEn: string; test: (lvl: number) => boolean };

// Faixas sem sobreposição e com o nome dizendo o intervalo; só aparecem as que têm conta
export const LEVEL_BUCKETS: LevelBucket[] = [
  { key: "140", label: "Level 140", labelEn: "Level 140", test: (l) => l >= 140 },
  { key: "130", label: "Level 130 a 139", labelEn: "Level 130–139", test: (l) => l >= 130 && l < 140 },
  { key: "120", label: "Level 120 a 129", labelEn: "Level 120–129", test: (l) => l >= 120 && l < 130 },
  { key: "110", label: "Level 110 a 119", labelEn: "Level 110–119", test: (l) => l >= 110 && l < 120 },
  { key: "lt110", label: "Abaixo do 110", labelEn: "Below 110", test: (l) => l < 110 },
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


/**
 * Teto do filtro de preço, tirado das contas à venda e arredondado para cima num número redondo
 * (370k → 400k, 900k → 900k). Se amanhã entrar uma conta mais cara, o filtro acompanha sozinho.
 */
export function getPriceCeiling(accounts: AccountListing[]): number {
  const max = Math.max(0, ...accounts.map((a) => getMinCpsK(a) ?? 0));
  if (max === 0) return 100;
  const step = max <= 100 ? 10 : max <= 500 ? 50 : 100;
  return Math.ceil(max / step) * step;
}

/** Passo do slider de preço: fino em tetos baixos, mais largo em tetos altos */
export function getPriceStep(ceiling: number): number {
  return ceiling <= 200 ? 5 : 10;
}

export interface AccountCriteria {
  search: string;
  className: string | null;
  minPrice: number;
  maxPrice: number;
  /** Contas sem preço em CPs ("A combinar") entram no resultado? */
  includeNegotiable: boolean;
  levels: string[];
}

/** Um só lugar para a regra de filtro: a página e a contagem da gaveta usam a mesma função. */
export function filterAccounts(accounts: AccountListing[], c: AccountCriteria): AccountListing[] {
  const q = c.search.trim().toLowerCase();
  // Chaves de level desconhecidas (links antigos) são ignoradas em vez de zerar a lista
  const buckets = LEVEL_BUCKETS.filter((b) => c.levels.includes(b.key));

  return accounts.filter((a) => {
    if (q) {
      const hit =
        a.title.toLowerCase().includes(q) ||
        a.className.toLowerCase().includes(q) ||
        a.sections.some((sec) => sec.items.some((item) => item.toLowerCase().includes(q)));
      if (!hit) return false;
    }
    if (c.className && a.className !== c.className) return false;

    const price = getMinCpsK(a);
    if (price === null) {
      if (!c.includeNegotiable) return false;
    } else if (price < c.minPrice || price > c.maxPrice) {
      return false;
    }

    if (buckets.length > 0) {
      const lvl = getAccountLevel(a);
      if (lvl === null || !buckets.some((b) => b.test(lvl))) return false;
    }
    return true;
  });
}
