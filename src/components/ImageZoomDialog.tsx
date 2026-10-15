import { useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useI18n } from "@/i18n";
import { returnFocusProps } from "@/lib/dialogFocus";

interface ImageZoomDialogProps {
  image: { src: string; title: string } | null;
  onClose: () => void;
}

/**
 * Print ampliado, inteiro (object-contain) sobre fundo escuro. Esc, o paddle ou clique fora fecham.
 * Pode abrir por cima da prévia; o Radix empilha os dois.
 */
export function ImageZoomDialog({ image, onClose }: ImageZoomDialogProps) {
  const { lang } = useI18n();
  const opener = useRef<HTMLElement | null>(null);

  return (
    <DialogPrimitive.Root open={image !== null} onOpenChange={(open) => !open && onClose()}>
      {image && (
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="band-dark fixed inset-0 z-[60] grid cursor-zoom-out place-items-center overflow-y-auto overscroll-contain bg-canvas-dark/95 p-4 data-[state=open]:animate-in data-[state=open]:fade-in-0">
            <DialogPrimitive.Content
              aria-describedby={undefined}
              {...returnFocusProps(opener)}
              className="relative cursor-default outline-none data-[state=open]:animate-in data-[state=open]:zoom-in-95"
            >
              <DialogPrimitive.Title className="sr-only">{image.title}</DialogPrimitive.Title>
              <img
                src={image.src}
                alt={`${lang === "pt" ? "Print da conta" : "Account screenshot"}: ${image.title}`}
                className="max-h-[85vh] max-w-[90vw] rounded-md object-contain"
              />
              <DialogPrimitive.Close aria-label={lang === "pt" ? "Fechar" : "Close"} className="paddle absolute right-sm top-sm">
                <X size={18} aria-hidden="true" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </DialogPrimitive.Overlay>
        </DialogPrimitive.Portal>
      )}
    </DialogPrimitive.Root>
  );
}

