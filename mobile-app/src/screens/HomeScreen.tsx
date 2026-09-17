import React, { useMemo } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StoryCircle } from '../components/StoryCircle';
import { VideoCard } from '../components/VideoCard';
import { contentApi } from '../services/contentApi';
import { colors, radii, spacing } from '../theme/tokens';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const feed = useMemo(() => contentApi.getHomeFeed(), []);

  const reelRows = useMemo(() => {
    const rows: (typeof feed.reels)[] = [];
    for (let i = 0; i < feed.reels.length; i += 2) {
      rows.push(feed.reels.slice(i, i + 2));
    }
    return rows;
  }, [feed.reels]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <FlatList
        data={[{ key: 'body' }]}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>S</Text>
              </View>
              <Pressable style={styles.uploadBtn}>
                <Text style={styles.uploadText}>Upload video +</Text>
              </Pressable>
              <Pressable
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Profile')}
                accessibilityLabel="Open menu"
              >
                <View style={styles.menuLine} />
                <View style={styles.menuLine} />
                <View style={styles.menuLine} />
              </Pressable>
            </View>

            <View style={styles.trendingRow}>
              <Text style={styles.trendingTitle}>⭐ Trending this week</Text>
              <Pressable>
                <Text style={styles.link}>All trends</Text>
              </Pressable>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tagsRow}
            >
              {feed.trendTags.map((tag) => (
                <View key={tag.id} style={styles.tag}>
                  <Text style={styles.tagText}>{tag.label}</Text>
                </View>
              ))}
            </ScrollView>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.storiesRow}
            >
              {feed.stories.map((story) => (
                <StoryCircle key={story.id} story={story} />
              ))}
            </ScrollView>
          </View>
        }
        renderItem={() => (
          <View style={styles.content}>
            {reelRows.map((pair, idx) => (
              <View key={`row-${idx}`} style={styles.reelRow}>
                {pair.map((video) => (
                  <VideoCard key={video.id} video={video} variant="grid" />
                ))}
              </View>
            ))}

            <Text style={styles.sectionTitle}>Long videos</Text>
            {feed.longVideos.map((video) => (
              <VideoCard key={video.id} video={video} variant="wide" />
            ))}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  logo: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontWeight: '700',
  },
  uploadBtn: {
    borderWidth: 1,
    borderColor: colors.brand,
    backgroundColor: 'rgba(124,58,237,0.18)',
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  uploadText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
  },
  menuBtn: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    gap: 5,
  },
  menuLine: {
    height: 2,
    backgroundColor: colors.text,
    borderRadius: 2,
  },
  trendingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
  trendingTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
  link: {
    color: colors.muted,
    fontSize: 13,
  },
  tagsRow: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    gap: spacing.sm,
  },
  tag: {
    borderRadius: radii.pill,
    backgroundColor: colors.elevated,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: spacing.sm,
  },
  tagText: {
    color: colors.textDim,
    fontSize: 12,
  },
  storiesRow: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  reelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
});
