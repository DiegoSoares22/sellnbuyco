import { useCallback, useSyncExternalStore } from "react";

/**
 * Consentimento de cookies e tecnologias parecidas (LGPD art. 7º, I e art. 8º; Guia de Cookies da ANPD).
 *
 * - O que é essencial (a própria escolha guardada aqui, a lista de interesses que o visitante salva)
 *   não depende de consentimento e não aparece nas categorias.
 * - Nada opcional roda antes de uma escolha válida: sem registro, tudo começa desligado.
 * - A escolha fica só no navegador do visitante, com versão e data. Ao incluir um fornecedor novo
 *   numa categoria (ex.: AdSense em "marketing"), aumente CONSENT_VERSION para perguntar de novo:
 *   quem aceitou "a música do YouTube" não aceitou anúncios.
 */
export type ConsentCategory = "analytics" | "preferences" | "marketing";
export type ConsentChoices = Record<ConsentCategory, boolean>;

export interface ConsentRecord {
  version: number;
  /** ISO 8601 do momento da escolha */
  decidedAt: string;
  choices: ConsentChoices;
}

export const CONSENT_STORAGE_KEY = "snb_consent";
export const CONSENT_VERSION = 1;
/** A escolha vale por 12 meses; depois o aviso volta a aparecer. */
export const CONSENT_MAX_AGE_DAYS = 365;

const CHANGE_EVENT = "snb:consent-change";
const OPEN_PREFERENCES_EVENT = "snb:open-cookie-preferences";

export const NO_OPTIONAL: ConsentChoices = { analytics: false, preferences: false, marketing: false };
export const ALL_OPTIONAL: ConsentChoices = { analytics: true, preferences: true, marketing: true };

/** Valida o que veio do storage: formato, versão e validade. Qualquer coisa estranha = sem escolha. */
export function parseConsent(raw: string | null, now: Date = new Date()): ConsentRecord | null {
  if (!raw) return null;
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  if (typeof data !== "object" || data === null) return null;
  const { version, decidedAt, choices } = data as Partial<ConsentRecord>;
  if (version !== CONSENT_VERSION || typeof decidedAt !== "string") return null;
  const decided = Date.parse(decidedAt);
  if (Number.isNaN(decided) || decided > now.getTime()) return null;
  if (now.getTime() - decided > CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000) return null;
  if (typeof choices !== "object" || choices === null) return null;
  // Só true explícito liga uma categoria
  return {
    version,
    decidedAt,
    choices: {
      analytics: choices.analytics === true,
      preferences: choices.preferences === true,
      marketing: choices.marketing === true,
    },
  };
}

function readRaw(): string | null {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

// useSyncExternalStore exige o mesmo objeto enquanto nada mudou: cache pelo texto cru
let cachedRaw: string | null | undefined;
let cachedRecord: ConsentRecord | null = null;
// Sem storage (modo privado bloqueado), a escolha vale para esta aba
let memoryRecord: ConsentRecord | null = null;

export function readConsent(): ConsentRecord | null {
  const raw = readRaw();
  if (raw === null && memoryRecord) return memoryRecord;
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedRecord = parseConsent(raw);
  }
  return cachedRecord;
}

export function saveConsent(choices: ConsentChoices): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
    choices: { ...choices },
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    memoryRecord = null;
  } catch {
    memoryRecord = record;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
  return record;
}

function subscribe(onChange: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === null || e.key === CONSENT_STORAGE_KEY) onChange();
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function useConsent() {
  const record = useSyncExternalStore(subscribe, readConsent, () => null);
  const granted = useCallback((category: ConsentCategory) => record?.choices[category] === true, [record]);
  return { record, decided: record !== null, granted };
}

/** Reabre o painel de preferências (rodapé, página de cookies, Política de Privacidade). */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}

export function onOpenCookiePreferences(handler: () => void) {
  window.addEventListener(OPEN_PREFERENCES_EVENT, handler);
  return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handler);
}
