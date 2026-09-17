export type StoryItem = {
  id: string;
  username: string;
  avatarUrl: string;
  isCreate?: boolean;
  trending?: boolean;
};

export type CategoryItem = {
  id: string;
  title: string;
  videoCountLabel: string;
  imageUrl: string;
};

export type PlaylistCard = {
  id: string;
  title: string;
  imageUrl: string;
};

export type VideoOrientation = 'portrait' | 'landscape';

export type VideoItem = {
  id: string;
  title: string;
  viewsLabel: string;
  thumbnailUrl: string;
  orientation: VideoOrientation;
  creatorAvatar?: string;
  creatorHandle?: string;
};

export type TrendTag = {
  id: string;
  label: string;
};

export type ProfileLink = {
  id: string;
  label: string;
  href: string;
};

export type ProfileStat = {
  id: string;
  label: string;
  value: string;
};

export type ProfileMetric = {
  id: string;
  label: string;
  value: string;
  icon: 'eye' | 'heart' | 'visit' | 'share' | 'video';
};

export type ProfileTab = 'long' | 'short' | 'playlist' | 'guestbook';

export type CreatorProfile = {
  id: string;
  displayName: string;
  verified: boolean;
  available: boolean;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
  following: string;
  views: string;
  likes: string;
  location: string;
  joined: string;
  freePlaylists: number;
  paidPlaylists: number;
  website: string;
  links: ProfileLink[];
  metrics: ProfileMetric[];
  categories: string[];
};
