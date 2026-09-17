'use client';

import { useEffect, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { StoriesRow } from '@/components/home/StoriesRow';
import { AboutSidebar } from '@/components/profile/AboutSidebar';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileTabs } from '@/components/profile/ProfileTabs';
import { VideoThumbnail } from '@/components/shared/VideoThumbnail';
import { contentApi } from '@/services/contentApi';
import type { CreatorProfile, StoryItem, VideoItem } from '@/types/content';

export default function ProfilePage() {
  const [profile, setProfile] = useState<CreatorProfile | null>(null);
  const [stories, setStories] = useState<StoryItem[]>([]);
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      const [p, s, v] = await Promise.all([
        contentApi.getCreatorProfile(),
        contentApi.getDesktopStories(),
        contentApi.getProfileShortVideos(),
      ]);
      if (!alive) return;
      setProfile(p);
      setStories(s);
      setVideos(v);
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (!profile) {
    return (
      <AppShell>
        <div className="flex h-[50vh] items-center justify-center px-4 text-sm text-muted">
          Loading profile…
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell rightPanel={<AboutSidebar profile={profile} />}>
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 lg:px-0">
        <ProfileHeader profile={profile} />
        <StoriesRow items={stories} />
        <ProfileTabs />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <VideoThumbnail key={video.id} video={video} className="min-w-0" />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
