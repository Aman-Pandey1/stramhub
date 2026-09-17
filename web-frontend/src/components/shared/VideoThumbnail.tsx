import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { VideoItem } from '@/types/content';

type Props = {
  video: VideoItem;
  className?: string;
};

function BrandMark() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand text-[11px] font-bold text-white">
      S
    </span>
  );
}

export function VideoThumbnail({ video, className }: Props) {
  const portrait = video.orientation === 'portrait';

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-elevated',
        portrait ? 'aspect-[9/14] min-w-[180px]' : 'aspect-video min-w-[280px]',
        className,
      )}
    >
      <Image
        src={video.thumbnailUrl}
        alt={video.title}
        fill
        className="object-cover transition duration-300 group-hover:scale-[1.03]"
        sizes={portrait ? '200px' : '320px'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/25" />

      <div className="absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 text-[11px] text-white/90 backdrop-blur-sm">
        {video.viewsLabel}
      </div>
      <div className="absolute right-2.5 top-2.5">
        <BrandMark />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end gap-2 p-3">
        {video.creatorAvatar ? (
          <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-white/30">
            <Image src={video.creatorAvatar} alt="" fill className="object-cover" sizes="28px" />
          </span>
        ) : null}
        <p className="truncate text-sm font-medium text-white">{video.title}</p>
      </div>
    </article>
  );
}
