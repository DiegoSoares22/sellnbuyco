import { describe, expect, it } from "vitest";
import { ACCOUNTS } from "@/data/accounts";

describe("October 18 catalog updates", () => {
  it.each([
    ["acc-125", "90k CPs"],
    ["acc-126", "130k CPs"],
    ["acc-129", "25k CPs"],
  ])("stores the confirmed price for %s", (id, price) => {
    expect(ACCOUNTS.find((account) => account.id === id)?.prices[0]?.value).toBe(price);
  });

  it("includes the confirmed jail information for image 3", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-125");
    expect(account?.sections.flatMap((section) => section.items)).toContain("1 Jail");
  });

  it("lists the new archer as 0 Jail with 1 ideal rune", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-129");
    const items = account?.sections.flatMap((section) => section.items) ?? [];
    expect(items).toContain("0 Jail");
    expect(items).toContain("1 Ideal Rune");
    expect(account?.className).toBe("Archer");
  });

  it("removes the specified Gears P7 Ninja listing", () => {
    expect(ACCOUNTS.some((account) => account.id === "acc-96")).toBe(false);
  });
});

describe("November 23 catalog updates", () => {
  it("removes the requested Archer while preserving the other two-epic listing", () => {
    expect(ACCOUNTS.some((account) => account.id === "acc-137")).toBe(false);
    expect(ACCOUNTS.some((account) => account.id === "acc-139")).toBe(true);
  });
  it("prices the HolyGrail ninja with and without unbound runes", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-141");
    const prices = account?.prices.map((p) => `${p.label}: ${p.value}`) ?? [];
    expect(prices).toEqual(["C/ runas unbound: 900k CPs", "Sem runas unbound: 550k CPs"]);
    expect(account?.className).toBe("Ninja");
    expect(account?.sections.flatMap((section) => section.items)).toContain("1 Jail");
  });
});

describe("November 22 catalog updates", () => {
  it("prices the new HeavenWonders ninja at 38k CPs with 0 Jail", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-140");
    expect(account?.prices[0]?.value).toBe("38k CPs");
    expect(account?.title).toBe("Ninja c/ HeavenWonders — 0 Jail");
    expect(account?.sections.flatMap((section) => section.items)).toContain("0 Jail");
  });

  it("keeps the earlier Heavenwonders listing negotiable", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-135");
    expect(account?.prices[0]?.value).toBe("A combinar");
    expect(account?.title).toBe("Ninja w/ Heavenwonders — 0 Jail");
  });
});

describe("November 6 catalog updates", () => {
  it.each([
    ["acc-131", "150k CPs"],
    ["acc-132", "25k CPs"],
  ])("stores the confirmed price for %s", (id, price) => {
    expect(ACCOUNTS.find((account) => account.id === id)?.prices[0]?.value).toBe(price);
  });

  it("keeps jail out of the two water listings that did not show it", () => {
    for (const id of ["acc-131", "acc-132"]) {
      const account = ACCOUNTS.find((listing) => listing.id === id);
      const items = account?.sections.flatMap((section) => section.items) ?? [];
      expect(items.some((item) => /jail/i.test(item))).toBe(false);
      expect(account?.className).toBe("Taoist");
    }
  });
});