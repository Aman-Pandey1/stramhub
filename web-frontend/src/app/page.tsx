import { AppShell } from '@/components/layout/AppShell';
import { MobileFeedRail } from '@/components/home/MobileFeedRail';
import { MobilePlaylistsRail } from '@/components/home/MobilePlaylistsRail';
import { MobileStoriesRail } from '@/components/home/MobileStoriesRail';
import { PlaylistSection } from '@/components/home/PlaylistSection';
import { StoriesRow } from '@/components/home/StoriesRow';
import { TrendingSection } from '@/components/home/TrendingSection';
import { VideoRail } from '@/components/home/VideoRail';
import { contentApi } from '@/services/contentApi';

export default async function HomePage() {
  const [stories, desktopStories, categories, mobilePlaylists, tags, reels, longVideos] =
    await Promise.all([
      contentApi.getStories(),
      contentApi.getDesktopStories(),
      contentApi.getPlaylistCategories(),
      contentApi.getMobilePlaylists(),
      contentApi.getTrendTags(),
      contentApi.getTrendingReels(),
      contentApi.getTrendingLongVideos(),
    ]);

  return (
    <AppShell>
      {/* Mobile home — matches phone mock */}
      <div className="flex flex-col gap-4 lg:hidden">
        <TrendingSection tags={tags} />
        <div className="px-3">
          <MobileStoriesRail items={stories} />
        </div>
        <div className="px-3">
          <MobilePlaylistsRail items={mobilePlaylists} />
        </div>
        <MobileFeedRail items={longVideos} />
      </div>

      {/* Desktop home */}
      <div className="mx-auto hidden max-w-6xl flex-col gap-8 lg:flex">
        <StoriesRow items={desktopStories} />
        <PlaylistSection items={categories} />
        <VideoRail id="reels" title="Most trending reels" actionLabel="All reels" items={reels} />
        <VideoRail
          id="long"
          title="Most trending Long videos"
          actionLabel="All videos"
          items={longVideos}
        />
      </div>
    </AppShell>
  );
}
