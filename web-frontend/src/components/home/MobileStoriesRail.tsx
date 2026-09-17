import { StoryCircle } from '@/components/shared/StoryCircle';
import { VerticalRailLabel } from '@/components/shared/VerticalRailLabel';
import type { StoryItem } from '@/types/content';

type Props = {
  items: StoryItem[];
};

export function MobileStoriesRail({ items }: Props) {
  return (
    <section aria-label="Stories" className="lg:hidden">
      <div className="flex overflow-hidden rounded-2xl bg-[#0f0f0f]">
        <VerticalRailLabel label="Stories" />
        <div className="flex flex-1 gap-3 overflow-x-auto px-3 py-3 hide-scrollbar">
          {items.map((story) => (
            <StoryCircle key={story.id} story={story} className="w-[64px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
