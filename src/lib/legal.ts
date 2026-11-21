import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

/**
 * Dados do responsável pelo site, usados na Política de Privacidade, nos Termos e no rodapé.
 *
 * Campos null ainda não foram informados e aparecem nas páginas como "a preencher".
 * O Decreto 7.962/2013 (art. 2º) pede nome ou razão social, CPF/CNPJ e endereços físico e
 * eletrônico em local de destaque; a LGPD (art. 9º e 41) pede a identificação do controlador e um
 * canal de contato. Preencha antes de publicar.
 */
export const OPERATOR = {
  /** Nome completo (pessoa física) ou razão social */
  legalName: null as string | null,
  /** CPF ou CNPJ */
  taxId: null as string | null,
  /** Endereço para correspondência */
  address: null as string | null,
  /** E-mail para pedidos de privacidade e atendimento */
  email: null as string | null,
  whatsapp: WHATSAPP_DISPLAY,
};

/** Data da versão em vigor da Política de Privacidade, dos Termos e da Política de Cookies. */
export const LEGAL_UPDATED = "2026-11-20";

export function formatLegalDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "America/Sao_Paulo" }).format(
    new Date(`${iso}T12:00:00-03:00`),
  );
}
