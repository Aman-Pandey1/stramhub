import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {StoryCircle} from '../../components/StoryCircle';
import {VideoCard} from '../../components/VideoCard';
import {colors, spacing} from '../../theme/tokens';
import type {StoryItem, VideoItem} from '../../types/content';

type Props = {
  stories: StoryItem[];
  reelPairs: VideoItem[][];
  longVideos: VideoItem[];
};

export function HomeFeedBody({stories, reelPairs, longVideos}: Props) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stories}>
        {stories.map(item => (
          <StoryCircle key={item.id} story={item} />
        ))}
      </ScrollView>

      <View style={styles.pad}>
        {reelPairs.map((pair, i) => (
          <View key={String(i)} style={styles.pair}>
            {pair.map(video => (
              <VideoCard key={video.id} video={video} variant="grid" />
            ))}
          </View>
        ))}

        <Text style={styles.section}>Long videos</Text>
        {longVideos.map(video => (
          <VideoCard key={video.id} video={video} variant="wide" />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  pad: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  pair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
});
