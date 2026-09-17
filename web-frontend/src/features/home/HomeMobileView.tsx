import { MobileFeedRail } from '@/components/home/MobileFeedRail';
import { MobilePlaylistsRail } from '@/components/home/MobilePlaylistsRail';
import { MobileStoriesRail } from '@/components/home/MobileStoriesRail';
import { TrendingSection } from '@/components/home/TrendingSection';
import type { PlaylistCard, StoryItem, TrendTag, VideoItem } from '@/types/content';

type Props = {
  tags: TrendTag[];
  stories: StoryItem[];
  playlists: PlaylistCard[];
  feed: VideoItem[];
};

export function HomeMobileView({ tags, stories, playlists, feed }: Props) {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      <TrendingSection tags={tags} />
      <div className="px-3">
        <MobileStoriesRail items={stories} />
      </div>
      <div className="px-3">
        <MobilePlaylistsRail items={playlists} />
      </div>
      <MobileFeedRail items={feed} />
    </div>
  );
}
