import { AppShell } from '@/components/layout/AppShell';
import { HomeDesktopView } from '@/features/home/HomeDesktopView';
import { HomeMobileView } from '@/features/home/HomeMobileView';
import { fetchHomeCatalog } from '@/repositories/catalog';

export default async function HomePage() {
  const catalog = await fetchHomeCatalog();

  return (
    <AppShell>
      <HomeMobileView
        tags={catalog.tags}
        stories={catalog.stories}
        playlists={catalog.playlists}
        feed={catalog.longform}
      />
      <HomeDesktopView
        stories={catalog.desktopStories}
        categories={catalog.categories}
        reels={catalog.reels}
        longform={catalog.longform}
      />
    </AppShell>
  );
}
