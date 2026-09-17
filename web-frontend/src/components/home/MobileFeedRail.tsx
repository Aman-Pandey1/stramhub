import Image from 'next/image';
import type { VideoItem } from '@/types/content';

type Props = {
  items: VideoItem[];
};

export function MobileFeedRail({ items }: Props) {
  return (
    <section aria-label="Feed" className="lg:hidden">
      <div className="flex gap-3 overflow-x-auto px-4 hide-scrollbar">
        {items.map((video) => (
          <article
            key={video.id}
            className="relative h-[150px] w-[78%] max-w-[320px] shrink-0 overflow-hidden rounded-2xl bg-elevated"
          >
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              className="object-cover"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            {video.creatorHandle ? (
              <span className="absolute left-3 top-3 text-xs font-medium text-white drop-shadow">
                {video.creatorHandle}
              </span>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
