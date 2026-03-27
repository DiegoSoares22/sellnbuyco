import { GameItem } from "@/data/items";
import ItemCard from "./ItemCard";

interface ItemGridProps {
  items: GameItem[];
}

export default function ItemGrid({ items }: ItemGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-lg">Nenhum item encontrado nesta categoria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <ItemCard key={item.name} item={item} index={i} />
      ))}
    </div>
  );
}
