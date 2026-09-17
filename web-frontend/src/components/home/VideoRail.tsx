import Link from 'next/link';
import { VideoThumbnail } from '@/components/shared/VideoThumbnail';
import type { VideoItem } from '@/types/content';

type Props = {
  title: string;
  actionLabel: string;
  actionHref?: string;
  items: VideoItem[];
  id?: string;
};

export function VideoRail({ title, actionLabel, actionHref = '#', items, id }: Props) {
  return (
    <section id={id} className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <span aria-hidden>🔥</span>
        </div>
        <Link href={actionHref} className="text-sm text-white/55 transition hover:text-white">
          {actionLabel}
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
        {items.map((video) => (
          <VideoThumbnail key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
