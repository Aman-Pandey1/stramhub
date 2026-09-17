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

/**
 * Thin read layer so screens don't import fixtures forever.
 * Swap these for fetch/React Query later without touching UI.
 */
export const contentApi = {
  getStories: async () => stories,
  getDesktopStories: async () => [createStory, ...stories],
  getPlaylistCategories: async () => playlistCategories,
  getMobilePlaylists: async () => mobilePlaylists,
  getTrendTags: async () => homeTrendTags,
  getTrendingReels: async () => trendingReels,
  getTrendingLongVideos: async () => trendingLongVideos,
  getCreatorProfile: async (id?: string) => {
    void id;
    return creatorProfile;
  },
  getProfileShortVideos: async () => profileShortVideos,
};
