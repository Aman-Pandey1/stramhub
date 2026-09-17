export type StoryItem = {
  id: string;
  username: string;
  avatarUrl: string;
  isCreate?: boolean;
  trending?: boolean;
};

export type TrendTag = {
  id: string;
  label: string;
};

export type VideoItem = {
  id: string;
  title: string;
  viewsLabel: string;
  thumbnailUrl: string;
  orientation: 'portrait' | 'landscape';
};

export type CreatorProfile = {
  id: string;
  displayName: string;
  verified: boolean;
  available: boolean;
  bio: string;
  avatarUrl: string;
  following: string;
  followers: string;
  likes: string;
  location: string;
  joined: string;
  website: string;
  freePlaylists: number;
  paidPlaylists: number;
};
