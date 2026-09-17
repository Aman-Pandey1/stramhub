import Image from 'next/image';
import { Plus } from 'lucide-react';
import type { StoryItem } from '@/types/content';
import { cn } from '@/lib/cn';

type Props = {
  story: StoryItem;
  className?: string;
};

export function StoryCircle({ story, className }: Props) {
  if (story.isCreate) {
    return (
      <button
        type="button"
        className={cn('flex w-[72px] shrink-0 flex-col items-center gap-2', className)}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-white/30 bg-elevated text-white lg:h-16 lg:w-16">
          <Plus size={22} />
        </span>
        <span className="truncate text-[11px] text-muted">Create new</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn('relative flex w-[72px] shrink-0 flex-col items-center gap-1.5', className)}
    >
      <span className="relative h-14 w-14 overflow-hidden rounded-full ring-[1.5px] ring-[#6b5cff] ring-offset-2 ring-offset-[#0f0f0f] lg:h-16 lg:w-16 lg:ring-2 lg:ring-brand/70 lg:ring-offset-canvas">
        <Image src={story.avatarUrl} alt={story.username} fill className="object-cover" sizes="64px" />
      </span>
      {story.trending ? (
        <span className="absolute right-0 top-0 text-sm" aria-hidden>
          🔥
        </span>
      ) : null}
      <span className="w-full truncate text-center text-[10px] text-white/70 lg:text-[11px] lg:text-white/80">
        {story.username}
      </span>
    </button>
  );
}
