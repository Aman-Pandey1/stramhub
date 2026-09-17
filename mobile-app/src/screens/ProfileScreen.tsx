import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PillButton} from '../components/PillButton';
import {StoryCircle} from '../components/StoryCircle';
import {VideoCard} from '../components/VideoCard';
import {getProfile} from '../repositories/catalog';
import {colors, radii, spacing} from '../theme/tokens';
import type {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const TAB_KEYS = ['grid', 'reels', 'clips', 'lists'] as const;

export function ProfileScreen({navigation}: Props) {
  const [tab, setTab] = useState<(typeof TAB_KEYS)[number]>('grid');
  const {profile, stories, grid} = getProfile();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={12}>
          <Text style={styles.navIcon}>{'‹'}</Text>
        </Pressable>
        <Pressable hitSlop={12}>
          <Text style={styles.navIcon}>{'⋮'}</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <Image source={{uri: profile.avatarUrl}} style={styles.avatar} />
          <View style={styles.heroActions}>
            <Pressable style={styles.roundBtn}>
              <Text style={styles.roundBtnText}>★</Text>
            </Pressable>
            <Pressable style={styles.roundBtn}>
              <Text style={styles.roundBtnText}>↗</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.name}>{profile.displayName}</Text>
          {profile.verified ? <Text style={styles.badge}>✓</Text> : null}
        </View>

        {profile.available ? (
          <View style={styles.status}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>Available Now</Text>
          </View>
        ) : null}

        <Text style={styles.bio}>{profile.bio}</Text>
        <Text style={styles.meta}>{profile.location}</Text>
        <Text style={styles.meta}>{profile.joined}</Text>
        <Text style={[styles.meta, styles.site]}>{profile.website}</Text>

        <View style={styles.stats}>
          <StatBlock value={profile.following} label="Following" />
          <StatBlock value={profile.followers} label="Followers" />
          <StatBlock value={profile.likes} label="Likes" />
        </View>

        <View style={styles.playlistRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{profile.freePlaylists} Free Playlists</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{profile.paidPlaylists} Paid Playlists</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stories}>
          {stories.map(s => (
            <StoryCircle key={s.id} story={s} />
          ))}
        </ScrollView>

        <View style={styles.tabs}>
          {TAB_KEYS.map(key => (
            <Pressable
              key={key}
              onPress={() => setTab(key)}
              style={[styles.tab, tab === key && styles.tabOn]}>
              <Text style={styles.tabLabel}>
                {key === 'grid' ? '▦' : key === 'reels' ? '▶' : key === 'clips' ? '◎' : '☰'}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.grid}>
          {grid.map(video => (
            <VideoCard key={video.id} video={video} variant="square" />
          ))}
        </View>
      </ScrollView>

      <View style={styles.dock}>
        <PillButton label="Follow" style={styles.follow} />
        <PillButton label="Message" variant="ghost" style={styles.side} />
        <PillButton label="Gift" variant="soft" style={styles.side} />
      </View>
    </SafeAreaView>
  );
}

function StatBlock({value, label}: {value: string; label: string}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: colors.canvas},
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  navIcon: {color: colors.text, fontSize: 26, lineHeight: 28},
  scroll: {paddingHorizontal: spacing.lg, paddingBottom: 110},
  hero: {flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.md},
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  heroActions: {marginLeft: 'auto', flexDirection: 'row'},
  roundBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.elevated,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
  },
  roundBtnText: {color: colors.text, fontSize: 14},
  nameRow: {flexDirection: 'row', alignItems: 'center'},
  name: {color: colors.text, fontSize: 22, fontWeight: '700', marginRight: 6},
  badge: {color: '#facc15', fontSize: 16, fontWeight: '700'},
  status: {flexDirection: 'row', alignItems: 'center', marginTop: 4},
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginRight: 6,
  },
  statusText: {color: colors.textDim, fontSize: 13},
  bio: {
    marginTop: spacing.md,
    color: colors.textDim,
    fontSize: 13,
    lineHeight: 19,
  },
  meta: {color: colors.muted, fontSize: 12, marginTop: 3},
  site: {color: '#38bdf8'},
  stats: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {alignItems: 'center', flex: 1},
  statValue: {color: colors.text, fontSize: 16, fontWeight: '700'},
  statLabel: {color: colors.muted, fontSize: 12, marginTop: 2},
  playlistRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.lg,
  },
  pill: {
    backgroundColor: 'rgba(124,58,237,0.25)',
    borderRadius: radii.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  pillText: {color: colors.brandGlow, fontSize: 12},
  stories: {paddingVertical: spacing.lg},
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    marginBottom: spacing.md,
  },
  tab: {flex: 1, alignItems: 'center', paddingVertical: 10},
  tabOn: {borderBottomWidth: 2, borderBottomColor: colors.text},
  tabLabel: {color: colors.text, fontSize: 16},
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dock: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
    flexDirection: 'row',
  },
  follow: {flex: 1.4, marginRight: spacing.sm},
  side: {flex: 1, marginLeft: spacing.sm},
});
