import { ACCOUNTS, getClassCounts } from "@/data/accounts";
import { getAvailableLevelBuckets, getMinCpsK, getPriceCeiling, getPriceStep } from "@/lib/accountFilters";

/*
 * Números do catálogo, calculados das contas à venda. Quando entra ou sai um anúncio,
 * os filtros se ajustam sozinhos: teto de preço, classes com conta e faixas de level.
 */

/** Teto do filtro de preço em k CPs (ex.: conta mais cara 370k → 400k; 900k → 900k) */
export const PRICE_CEILING = getPriceCeiling(ACCOUNTS);
export const PRICE_STEP = getPriceStep(PRICE_CEILING);

/** Classes que têm conta à venda, da mais comum para a menos comum */
export const CLASS_COUNTS: [string, number][] = Object.entries(getClassCounts(ACCOUNTS)).sort((a, b) => b[1] - a[1]);

/** Quantas contas estão "A combinar" (sem preço em CPs) */
export const NEGOTIABLE_COUNT = ACCOUNTS.filter((a) => getMinCpsK(a) === null).length;

/** Faixas de level que têm pelo menos uma conta */
export const LEVEL_OPTIONS = getAvailableLevelBuckets(ACCOUNTS);
