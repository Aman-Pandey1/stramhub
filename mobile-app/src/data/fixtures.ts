import type { CreatorProfile, StoryItem, TrendTag, VideoItem } from '../types/content';

const pic = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const stories: StoryItem[] = [
  { id: 'create', username: 'Create new', avatarUrl: '', isCreate: true },
  {
    id: 's1',
    username: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    trending: true,
  },
  {
    id: 's2',
    username: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 's3',
    username: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    trending: true,
  },
  {
    id: 's4',
    username: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?img=15',
  },
  {
    id: 's5',
    username: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?img=68',
  },
];

export const trendTags: TrendTag[] = [
  { id: 't1', label: 'Creators' },
  { id: 't2', label: 'Comedy' },
  { id: 't3', label: 'Fitness' },
  { id: 't4', label: 'Music' },
  { id: 't5', label: 'Lifestyle' },
  { id: 't6', label: 'Gaming' },
];

export const reelGrid: VideoItem[] = [
  {
    id: 'r1',
    title: 'Night Cuts',
    viewsLabel: '3.1M',
    thumbnailUrl: pic('photo-1534528741775-53994a69daeb', 480, 720),
    orientation: 'portrait',
  },
  {
    id: 'r2',
    title: 'Studio Drop',
    viewsLabel: '2.4M',
    thumbnailUrl: pic('photo-1529626455594-4ff0802cfb7e', 480, 720),
    orientation: 'portrait',
  },
  {
    id: 'r3',
    title: 'City Reel',
    viewsLabel: '1.8M',
    thumbnailUrl: pic('photo-1524504388940-b1c1722653e1', 480, 720),
    orientation: 'portrait',
  },
  {
    id: 'r4',
    title: 'Behind Set',
    viewsLabel: '980K',
    thumbnailUrl: pic('photo-1517841905240-472988babdf9', 480, 720),
    orientation: 'portrait',
  },
];

export const longFeed: VideoItem[] = [
  {
    id: 'l1',
    title: 'Tournament Finals',
    viewsLabel: '3.1M views',
    thumbnailUrl: pic('photo-1542751371-adc38448a05e', 960, 540),
    orientation: 'landscape',
  },
  {
    id: 'l2',
    title: 'Desert Road Film',
    viewsLabel: '2.7M views',
    thumbnailUrl: pic('photo-1506905925346-21bda4d32df4', 960, 540),
    orientation: 'landscape',
  },
];

export const profileGrid: VideoItem[] = Array.from({ length: 9 }).map((_, i) => ({
  id: `pg-${i + 1}`,
  title: `Clip ${i + 1}`,
  viewsLabel: '3.1M',
  thumbnailUrl: pic(
    [
      'photo-1534528741775-53994a69daeb',
      'photo-1529626455594-4ff0802cfb7e',
      'photo-1524504388940-b1c1722653e1',
      'photo-1517841905240-472988babdf9',
      'photo-1488426862026-3ee34a7d66df',
      'photo-1494790108377-be9c29b29330',
      'photo-1506794778202-cad84cf45f1d',
      'photo-1511367461989-f85a21fda167',
      'photo-1511671782779-c97d3d27a1d4',
    ][i],
    400,
    400,
  ),
  orientation: 'portrait' as const,
}));

export const creatorProfile: CreatorProfile = {
  id: 'stas-neprokin',
  displayName: 'Stas Neprokin',
  verified: true,
  available: true,
  bio: 'Building cinematic drops and creator-first playlists. New drops every week.',
  avatarUrl:
    'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=400&h=400&q=80',
  following: '120',
  followers: '40M',
  likes: '40M',
  location: 'Earth',
  joined: 'Joined April 2009',
  website: 'stas.studio',
  freePlaylists: 2,
  paidPlaylists: 4,
};
