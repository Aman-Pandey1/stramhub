import {
  creatorProfile,
  longFeed,
  profileGrid,
  reelGrid,
  stories,
  trendTags,
} from '../data/fixtures';

export function getHomeFeed() {
  return {
    stories,
    trendTags,
    reels: reelGrid,
    longVideos: longFeed,
  };
}

export function getProfile(userId?: string) {
  // TODO: hit backend when auth lands
  void userId;
  return {
    profile: creatorProfile,
    stories,
    grid: profileGrid,
  };
}
