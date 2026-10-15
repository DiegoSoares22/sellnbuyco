const WHATSAPP = "5575981382799";

export const buildWa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
