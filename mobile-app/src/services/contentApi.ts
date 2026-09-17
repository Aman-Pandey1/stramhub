import {
  creatorProfile,
  longFeed,
  profileGrid,
  reelGrid,
  stories,
  trendTags,
} from '../data/fixtures';

export const contentApi = {
  getHomeFeed() {
    return {
      stories,
      trendTags,
      reels: reelGrid,
      longVideos: longFeed,
    };
  },
  getProfile(id?: string) {
    void id;
    return {
      profile: creatorProfile,
      stories,
      grid: profileGrid,
    };
  },
};
