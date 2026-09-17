import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeFeedBody} from '../features/home/HomeFeedBody';
import {HomeTopBar} from '../features/home/HomeTopBar';
import {HomeTrendStrip} from '../features/home/HomeTrendStrip';
import {getHomeFeed} from '../repositories/catalog';
import {colors} from '../theme/tokens';
import {chunk} from '../utils/array';
import type {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({navigation}: Props) {
  const feed = getHomeFeed();
  const reelPairs = chunk(feed.reels, 2);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <FlatList
        data={[{key: 'feed'}]}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <HomeTopBar onOpenMenu={() => navigation.navigate('Profile')} />
            <HomeTrendStrip tags={feed.trendTags} />
          </>
        }
        renderItem={() => (
          <HomeFeedBody
            stories={feed.stories}
            reelPairs={reelPairs}
            longVideos={feed.longVideos}
          />
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
});
