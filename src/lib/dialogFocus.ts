/**
 * O Radix só devolve o foco a um DialogPrimitive.Trigger. Nos nossos diálogos quem abre é um
 * botão comum, então guardamos o elemento focado no momento da abertura (onOpenAutoFocus roda
 * antes do Radix mover o foco) e devolvemos o foco a ele ao fechar.
 */
export function returnFocusProps(opener: { current: HTMLElement | null }) {
  return {
    onOpenAutoFocus: () => {
      opener.current = document.activeElement as HTMLElement | null;
    },
    onCloseAutoFocus: (event: Event) => {
      event.preventDefault();
      opener.current?.focus();
    },
  };
}
