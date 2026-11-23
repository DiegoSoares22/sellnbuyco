import { describe, expect, it } from "vitest";
import { formatAllPrices, formatPrice } from "@/lib/price";
import { ACCOUNTS } from "@/data/accounts";

describe("listings with two prices", () => {
  const acc = ACCOUNTS.find((a) => a.id === "acc-141");

  it("keeps the first price as the headline price", () => {
    const price = formatPrice(acc!, "pt");
    expect(price.amount).toBe("900k");
    expect(price.unit).toBe("CPs");
  });

  it("exposes every price with its own label", () => {
    const all = formatAllPrices(acc!, "pt");
    expect(all.map((p) => `${p.label}=${p.amount} ${p.unit}`)).toEqual([
      "C/ runas unbound=900k CPs",
      "Sem runas unbound=550k CPs",
    ]);
  });
});
