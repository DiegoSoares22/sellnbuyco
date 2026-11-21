import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ALL_OPTIONAL,
  CONSENT_MAX_AGE_DAYS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  NO_OPTIONAL,
  parseConsent,
  readConsent,
  saveConsent,
} from "@/lib/consent";

const NOW = new Date("2026-11-20T12:00:00Z");
const record = (patch: Record<string, unknown> = {}) =>
  JSON.stringify({ version: CONSENT_VERSION, decidedAt: "2026-11-01T12:00:00Z", choices: ALL_OPTIONAL, ...patch });

describe("parseConsent", () => {
  it("sem registro ou com lixo, não há escolha", () => {
    expect(parseConsent(null, NOW)).toBeNull();
    expect(parseConsent("", NOW)).toBeNull();
    expect(parseConsent("{nope", NOW)).toBeNull();
    expect(parseConsent("42", NOW)).toBeNull();
    expect(parseConsent(record({ choices: null }), NOW)).toBeNull();
  });

  it("aceita um registro válido", () => {
    expect(parseConsent(record(), NOW)?.choices).toEqual(ALL_OPTIONAL);
  });

  it("versão diferente pergunta de novo", () => {
    expect(parseConsent(record({ version: CONSENT_VERSION + 1 }), NOW)).toBeNull();
    expect(parseConsent(record({ version: CONSENT_VERSION - 1 }), NOW)).toBeNull();
  });

  it("escolha vencida ou com data no futuro não vale", () => {
    const old = new Date(NOW.getTime() - (CONSENT_MAX_AGE_DAYS + 1) * 24 * 60 * 60 * 1000).toISOString();
    expect(parseConsent(record({ decidedAt: old }), NOW)).toBeNull();
    expect(parseConsent(record({ decidedAt: "2027-01-01T00:00:00Z" }), NOW)).toBeNull();
    expect(parseConsent(record({ decidedAt: "ontem" }), NOW)).toBeNull();
  });

  it("só true explícito liga uma categoria", () => {
    const parsed = parseConsent(record({ choices: { marketing: "true", analytics: 1, preferences: true } }), NOW);
    expect(parsed?.choices).toEqual({ analytics: false, preferences: true, marketing: false });
  });
});

describe("saveConsent / readConsent", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("grava, avisa os ouvintes e lê de volta", () => {
    const onChange = vi.fn();
    window.addEventListener("snb:consent-change", onChange);
    saveConsent({ ...NO_OPTIONAL, marketing: true });
    window.removeEventListener("snb:consent-change", onChange);

    expect(onChange).toHaveBeenCalledOnce();
    expect(readConsent()?.choices).toEqual({ ...NO_OPTIONAL, marketing: true });
    expect(JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY)!).version).toBe(CONSENT_VERSION);
  });

  it("devolve o mesmo objeto enquanto nada muda (exigência do useSyncExternalStore)", () => {
    saveConsent(NO_OPTIONAL);
    expect(readConsent()).toBe(readConsent());
  });

  it("sem storage, a escolha vale para a aba", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
    saveConsent(ALL_OPTIONAL);
    expect(readConsent()?.choices).toEqual(ALL_OPTIONAL);
  });
});
