import type { CSSProperties } from "react";

/**
 * Closes de um print (crop-frame e galerias em bento). Os prints de conta seguem o mesmo layout de
 * colagem do jogo: painel de atributos à esquerda, roda de runas no centro-direita, inventário e
 * relíquias embaixo. Cada preset é um zoom (background-size) e um ponto de mira (background-position).
 */
export interface PrintCrop {
  size: string;
  position: string;
}

/** Hero: painel de atributos e roda de runas, sobrepostos ao print grande */
export const HERO_CROPS: PrintCrop[] = [
  { size: "520%", position: "4% 22%" },
  { size: "640%", position: "77% 26%" },
];

/** Prévia: três quadrados sob o print */
export const BENTO_CROPS: PrintCrop[] = [
  { size: "420%", position: "8% 30%" },
  { size: "420%", position: "52% 18%" },
  { size: "420%", position: "92% 70%" },
];

/** Página da conta: coluna lateral da galeria */
export const SIDE_CROPS: PrintCrop[] = [
  { size: "360%", position: "4% 22%" },
  { size: "360%", position: "77% 26%" },
];

export function cropStyle(image: string, crop: PrintCrop): CSSProperties {
  return { backgroundImage: `url(${image})`, backgroundSize: crop.size, backgroundPosition: crop.position };
}
