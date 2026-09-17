import { PlaylistSection } from '@/components/home/PlaylistSection';
import { StoriesRow } from '@/components/home/StoriesRow';
import { VideoRail } from '@/components/home/VideoRail';
import type { CategoryItem, StoryItem, VideoItem } from '@/types/content';

type Props = {
  stories: StoryItem[];
  categories: CategoryItem[];
  reels: VideoItem[];
  longform: VideoItem[];
};

export function HomeDesktopView({ stories, categories, reels, longform }: Props) {
  return (
    <div className="mx-auto hidden max-w-6xl flex-col gap-8 lg:flex">
      <StoriesRow items={stories} />
      <PlaylistSection items={categories} />
      <VideoRail id="reels" title="Most trending reels" actionLabel="All reels" items={reels} />
      <VideoRail
        id="long"
        title="Most trending Long videos"
        actionLabel="All videos"
        items={longform}
      />
    </div>
  );
}
