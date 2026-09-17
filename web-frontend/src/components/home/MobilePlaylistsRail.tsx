import Image from 'next/image';
import { Play } from 'lucide-react';
import { VerticalRailLabel } from '@/components/shared/VerticalRailLabel';
import type { PlaylistCard } from '@/types/content';

type Props = {
  items: PlaylistCard[];
};

export function MobilePlaylistsRail({ items }: Props) {
  return (
    <section aria-label="Playlists" className="lg:hidden">
      <div className="flex overflow-hidden rounded-2xl bg-[#0f0f0f]">
        <VerticalRailLabel label="Playlists" className="from-[#3d35c8] to-[#1a1460]" />
        <div className="flex flex-1 gap-3 overflow-x-auto px-3 py-3 hide-scrollbar">
          {items.map((item) => (
            <article key={item.id} className="w-[210px] shrink-0">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="210px"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-black shadow-lg">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </span>
                </div>
              </div>
              <p className="mt-2 truncate text-sm font-medium text-white">{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
