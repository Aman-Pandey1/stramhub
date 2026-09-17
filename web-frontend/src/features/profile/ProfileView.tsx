import { StoriesRow } from '@/components/home/StoriesRow';
import { AboutSidebar } from '@/components/profile/AboutSidebar';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileTabs } from '@/components/profile/ProfileTabs';
import { VideoThumbnail } from '@/components/shared/VideoThumbnail';
import { AppShell } from '@/components/layout/AppShell';
import type { CreatorProfile, StoryItem, VideoItem } from '@/types/content';

type Props = {
  profile: CreatorProfile;
  stories: StoryItem[];
  shorts: VideoItem[];
};

export function ProfileView({ profile, stories, shorts }: Props) {
  return (
    <AppShell rightPanel={<AboutSidebar profile={profile} />}>
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 lg:px-0">
        <ProfileHeader profile={profile} />
        <StoriesRow items={stories} />
        <ProfileTabs />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {shorts.map((clip) => (
            <VideoThumbnail key={clip.id} video={clip} className="min-w-0" />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
