import type {
  CategoryItem,
  CreatorProfile,
  PlaylistCard,
  StoryItem,
  TrendTag,
  VideoItem,
} from '@/types/content';

const unsplash = (id: string, w = 800, h = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const stories: StoryItem[] = [
  {
    id: 's1',
    username: 'x_ae-23b',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 's2',
    username: 'maisenpai',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 's3',
    username: 'saylortwift',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 's4',
    username: 'johndoe',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 's5',
    username: 'nova_lux',
    avatarUrl: 'https://i.pravatar.cc/150?img=25',
  },
  {
    id: 's6',
    username: 'reelcraft',
    avatarUrl: 'https://i.pravatar.cc/150?img=68',
  },
];

export const createStory: StoryItem = {
  id: 'create',
  username: 'Create new',
  avatarUrl: '',
  isCreate: true,
};

export const playlistCategories: CategoryItem[] = [
  {
    id: 'c1',
    title: 'Actors',
    videoCountLabel: '150+ Videos',
    imageUrl: unsplash('photo-1506794778202-cad84cf45f1d', 640, 420),
  },
  {
    id: 'c2',
    title: 'Creators',
    videoCountLabel: '150+ Videos',
    imageUrl: unsplash('photo-1494790108377-be9c29b29330', 640, 420),
  },
  {
    id: 'c3',
    title: 'Comedy',
    videoCountLabel: '150+ Videos',
    imageUrl: unsplash('photo-1511367461989-f85a21fda167', 640, 420),
  },
  {
    id: 'c4',
    title: 'Musicians',
    videoCountLabel: '150+ Videos',
    imageUrl: unsplash('photo-1511671782779-c97d3d27a1d4', 640, 420),
  },
  {
    id: 'c5',
    title: 'Athletes',
    videoCountLabel: '150+ Videos',
    imageUrl: unsplash('photo-1517836357463-d25dfeac3438', 640, 420),
  },
  {
    id: 'c6',
    title: 'Reality TV',
    videoCountLabel: '150+ Videos',
    imageUrl: unsplash('photo-1529626455594-4ff0802cfb7e', 640, 420),
  },
];

export const mobilePlaylists: PlaylistCard[] = [
  {
    id: 'mp1',
    title: 'All Plump, All Yours',
    imageUrl: unsplash('photo-1524504388940-b1c1722653e1', 720, 480),
  },
  {
    id: 'mp2',
    title: 'Weekend Warmups',
    imageUrl: unsplash('photo-1517841905240-472988babdf9', 720, 480),
  },
  {
    id: 'mp3',
    title: 'Night Shift Cuts',
    imageUrl: unsplash('photo-1488426862026-3ee34a7d66df', 720, 480),
  },
  {
    id: 'mp4',
    title: 'Creator Spotlights',
    imageUrl: unsplash('photo-1494790108377-be9c29b29330', 720, 480),
  },
];

export const trendingReels: VideoItem[] = [
  {
    id: 'r1',
    title: 'The Handmaidens',
    viewsLabel: '3.1M views',
    thumbnailUrl: unsplash('photo-1534528741775-53994a69daeb', 480, 720),
    orientation: 'portrait',
    creatorAvatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    id: 'r2',
    title: 'Night Drive Cuts',
    viewsLabel: '2.4M views',
    thumbnailUrl: unsplash('photo-1529626455594-4ff0802cfb7e', 480, 720),
    orientation: 'portrait',
    creatorAvatar: 'https://i.pravatar.cc/80?img=9',
  },
  {
    id: 'r3',
    title: 'Studio Session',
    viewsLabel: '1.8M views',
    thumbnailUrl: unsplash('photo-1524504388940-b1c1722653e1', 480, 720),
    orientation: 'portrait',
    creatorAvatar: 'https://i.pravatar.cc/80?img=20',
  },
  {
    id: 'r4',
    title: 'City Lights Reel',
    viewsLabel: '4.2M views',
    thumbnailUrl: unsplash('photo-1517841905240-472988babdf9', 480, 720),
    orientation: 'portrait',
    creatorAvatar: 'https://i.pravatar.cc/80?img=33',
  },
  {
    id: 'r5',
    title: 'Behind The Set',
    viewsLabel: '980K views',
    thumbnailUrl: unsplash('photo-1488426862026-3ee34a7d66df', 480, 720),
    orientation: 'portrait',
    creatorAvatar: 'https://i.pravatar.cc/80?img=41',
  },
];

export const trendingLongVideos: VideoItem[] = [
  {
    id: 'l1',
    title: 'Tournament Finals',
    viewsLabel: '3.1M views',
    thumbnailUrl: unsplash('photo-1511285560929-80b456fea0bc', 960, 540),
    orientation: 'landscape',
    creatorAvatar: 'https://i.pravatar.cc/80?img=11',
    creatorHandle: '@morganwatkins91',
  },
  {
    id: 'l2',
    title: 'Magic Ally Live',
    viewsLabel: '2.7M views',
    thumbnailUrl: unsplash('photo-1465495976277-4387d4b0b4c6', 960, 540),
    orientation: 'landscape',
    creatorAvatar: 'https://i.pravatar.cc/80?img=14',
    creatorHandle: '@Magic.ally',
  },
  {
    id: 'l3',
    title: 'Late Night Talk',
    viewsLabel: '1.5M views',
    thumbnailUrl: unsplash('photo-1492684223066-81342ee5ff30', 960, 540),
    orientation: 'landscape',
    creatorAvatar: 'https://i.pravatar.cc/80?img=18',
    creatorHandle: '@nightshift',
  },
];

export const homeTrendTags: TrendTag[] = [
  { id: 't1', label: 'Creators' },
  { id: 't2', label: 'Comedy' },
  { id: 't3', label: 'Fitness' },
  { id: 't4', label: 'Music' },
  { id: 't5', label: 'Lifestyle' },
  { id: 't6', label: 'Gaming' },
];

export const creatorProfile: CreatorProfile = {
  id: 'stas-neprokin',
  displayName: 'Stas Neprokin',
  verified: true,
  available: true,
  bio: 'Building cinematic drops and creator-first playlists. New drops every week.',
  avatarUrl:
    'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=400&h=400&q=80',
  coverUrl: unsplash('photo-1470229722913-7c0e2dbbafd3', 1600, 500),
  following: '143',
  views: '149',
  likes: '149',
  location: 'Earth',
  joined: 'Joined April 2009',
  freePlaylists: 2,
  paidPlaylists: 4,
  website: 'stas.studio',
  links: [
    { id: 'lk1', label: 'stas.studio', href: '#' },
    { id: 'lk2', label: 'portfolio', href: '#' },
  ],
  metrics: [
    { id: 'm1', label: 'Views', value: '63.5M', icon: 'eye' },
    { id: 'm2', label: 'Likes', value: '1.2M', icon: 'heart' },
    { id: 'm3', label: 'Visits', value: '1.6M', icon: 'visit' },
    { id: 'm4', label: 'Shares', value: '1.4M', icon: 'share' },
    { id: 'm5', label: 'Videos', value: '1,189', icon: 'video' },
  ],
  categories: [
    'Traveling',
    'Corporate Life',
    'Couples',
    'Trending Topic',
    'Festival',
    'Music listening',
    'Reading time',
    'Creator Hub',
  ],
};

export const profileShortVideos: VideoItem[] = Array.from({ length: 8 }).map((_, idx) => ({
  id: `ps-${idx + 1}`,
  title: 'The Handmaid...',
  viewsLabel: '3.1M views',
  thumbnailUrl: unsplash(
    [
      'photo-1534528741775-53994a69daeb',
      'photo-1529626455594-4ff0802cfb7e',
      'photo-1524504388940-b1c1722653e1',
      'photo-1517841905240-472988babdf9',
      'photo-1488426862026-3ee34a7d66df',
      'photo-1494790108377-be9c29b29330',
      'photo-1506794778202-cad84cf45f1d',
      'photo-1511367461989-f85a21fda167',
    ][idx],
    480,
    720,
  ),
  orientation: 'portrait' as const,
  creatorAvatar: 'https://i.pravatar.cc/80?img=' + (idx + 3),
}));
