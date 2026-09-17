import { CategoryCard } from '@/components/shared/CategoryCard';
import type { CategoryItem } from '@/types/content';

type Props = {
  items: CategoryItem[];
};

export function PlaylistSection({ items }: Props) {
  return (
    <section id="playlists" className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold text-white">Playlist & chill</h2>
        <span aria-hidden>💜</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
