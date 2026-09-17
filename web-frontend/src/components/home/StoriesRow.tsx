import { StoryCircle } from '@/components/shared/StoryCircle';
import type { StoryItem } from '@/types/content';

type Props = {
  items: StoryItem[];
};

export function StoriesRow({ items }: Props) {
  return (
    <section aria-label="Stories" className="overflow-x-auto hide-scrollbar">
      <div className="flex gap-4 pb-1">
        {items.map((story) => (
          <StoryCircle key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
