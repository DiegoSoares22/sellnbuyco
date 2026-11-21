const WHATSAPP = "5575981382799";

/** O mesmo número, como aparece para quem lê (Política de Privacidade, Termos). */
export const WHATSAPP_DISPLAY = "+55 (75) 98138-2799";

export const buildWa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
