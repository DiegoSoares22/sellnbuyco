import { GAME_ITEMS } from "@/data/items";

export default function DebugPanel() {
  const total = GAME_ITEMS.length;
  const withImage = GAME_ITEMS.filter((i) => i.image).length;
  const withoutImage = total - withImage;

  return (
    <div className="fixed top-2 right-2 z-[60] bg-card border border-border rounded-lg px-3 py-2 text-[10px] text-muted-foreground opacity-50 hover:opacity-100 transition-opacity">
      <div>Items: {total}</div>
      <div>✅ Imagens: {withImage}</div>
      <div>❌ Sem imagem: {withoutImage}</div>
    </div>
  );
}
