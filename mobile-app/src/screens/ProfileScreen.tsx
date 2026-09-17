import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PillButton } from '../components/PillButton';
import { StoryCircle } from '../components/StoryCircle';
import { VideoCard } from '../components/VideoCard';
import { contentApi } from '../services/contentApi';
import { colors, radii, spacing } from '../theme/tokens';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const tabs = [
  { id: 'grid', label: '▦' },
  { id: 'reels', label: '▶' },
  { id: 'video', label: '◎' },
  { id: 'playlist', label: '☰' },
] as const;

export function ProfileScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('grid');
  const { profile, stories, grid } = contentApi.getProfile();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={12}>
          <Text style={styles.iconBtn}>←</Text>
        </Pressable>
        <Pressable hitSlop={12}>
          <Text style={styles.iconBtn}>⋮</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.heroRow}>
          <Image source={{ uri: profile.avatarUrl }} style={styles.avatar} />
          <View style={styles.heroActions}>
            <Pressable style={styles.roundIcon}>
              <Text style={styles.roundIconText}>★</Text>
            </Pressable>
            <Pressable style={styles.roundIcon}>
              <Text style={styles.roundIconText}>⤴</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.name}>{profile.displayName}</Text>
          {profile.verified ? <Text style={styles.verified}>✓</Text> : null}
        </View>
        {profile.available ? (
          <View style={styles.statusRow}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>Available Now</Text>
          </View>
        ) : null}

        <Text style={styles.bio}>{profile.bio}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.meta}>🌍 {profile.location}</Text>
          <Text style={styles.meta}>{profile.joined}</Text>
          <Text style={[styles.meta, styles.link]}>{profile.website}</Text>
        </View>

        <View style={styles.statsRow}>
          <Stat value={profile.following} label="Following" />
          <Stat value={profile.followers} label="Followers" />
          <Stat value={profile.likes} label="Likes" />
        </View>

        <View style={styles.playlistTags}>
          <View style={styles.playlistTag}>
            <Text style={styles.playlistTagText}>{profile.freePlaylists} Free Playlists</Text>
          </View>
          <View style={styles.playlistTag}>
            <Text style={styles.playlistTagText}>{profile.paidPlaylists} Paid Playlists</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stories}
        >
          {stories.map((story) => (
            <StoryCircle key={story.id} story={story} />
          ))}
        </ScrollView>

        <View style={styles.tabs}>
          {tabs.map((tab) => (
            <Pressable
              key={tab.id}
              onPress={() => setActiveTab(tab.id)}
              style={[styles.tab, activeTab === tab.id && styles.tabActive]}
            >
              <Text style={styles.tabLabel}>{tab.label}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.grid}>
          {grid.map((video) => (
            <VideoCard key={video.id} video={video} variant="square" />
          ))}
        </View>
      </ScrollView>

      <View style={styles.dock}>
        <PillButton label="Follow" style={styles.dockFollow} />
        <PillButton label="Message" variant="ghost" style={styles.dockSide} />
        <PillButton label="Gift" variant="soft" style={styles.dockSide} />
      </View>
    </SafeAreaView>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  iconBtn: {
    color: colors.text,
    fontSize: 22,
  },
  scroll: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 100,
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  heroActions: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  roundIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.elevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundIconText: {
    color: colors.text,
    fontSize: 14,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
  },
  verified: {
    color: '#facc15',
    fontSize: 16,
    fontWeight: '700',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
  },
  statusText: {
    color: colors.textDim,
    fontSize: 13,
  },
  bio: {
    marginTop: spacing.md,
    color: colors.textDim,
    fontSize: 13,
    lineHeight: 19,
  },
  metaRow: {
    marginTop: spacing.sm,
    gap: 4,
  },
  meta: {
    color: colors.muted,
    fontSize: 12,
  },
  link: {
    color: '#38bdf8',
  },
  statsRow: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  statLabel: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 2,
  },
  playlistTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  playlistTag: {
    backgroundColor: 'rgba(124,58,237,0.25)',
    borderRadius: radii.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  playlistTagText: {
    color: colors.brandGlow,
    fontSize: 12,
  },
  stories: {
    paddingVertical: spacing.lg,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    marginBottom: spacing.md,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.text,
  },
  tabLabel: {
    color: colors.text,
    fontSize: 16,
  },
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
    gap: spacing.sm,
  },
  dockFollow: {
    flex: 1.4,
  },
  dockSide: {
    flex: 1,
  },
});
