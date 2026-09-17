import {
  createStory,
  creatorProfile,
  homeTrendTags,
  mobilePlaylists,
  playlistCategories,
  profileShortVideos,
  stories,
  trendingLongVideos,
  trendingReels,
} from '@/data/fixtures';

// swap this module for a real HTTP client later — keep the same method names
export async function fetchHomeCatalog() {
  const [storyList, categories, playlists, tags, reels, longform] = await Promise.all([
    Promise.resolve(stories),
    Promise.resolve(playlistCategories),
    Promise.resolve(mobilePlaylists),
    Promise.resolve(homeTrendTags),
    Promise.resolve(trendingReels),
    Promise.resolve(trendingLongVideos),
  ]);

  return {
    stories: storyList,
    desktopStories: [createStory, ...storyList],
    categories,
    playlists,
    tags,
    reels,
    longform,
  };
}

export async function fetchProfileBundle(profileId?: string) {
  // id reserved for when we wire /api/creators/:id
  void profileId;

  return {
    profile: creatorProfile,
    stories: [createStory, ...stories],
    shorts: profileShortVideos,
  };
}
