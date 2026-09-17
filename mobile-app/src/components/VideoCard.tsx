import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors, radii, spacing} from '../theme/tokens';
import type {VideoItem} from '../types/content';

const COL_GAP = 10;
const SCREEN_PAD = 16;
const half = (Dimensions.get('window').width - SCREEN_PAD * 2 - COL_GAP) / 2;

type Props = {
  video: VideoItem;
  variant?: 'grid' | 'wide' | 'square';
  onPress?: () => void;
};

export function VideoCard({video, variant = 'grid', onPress}: Props) {
  const sizeStyle =
    variant === 'wide'
      ? styles.wide
      : variant === 'square'
        ? styles.square
        : styles.grid;

  return (
    <Pressable onPress={onPress} style={[styles.card, sizeStyle]}>
      <ImageBackground
        source={{uri: video.thumbnailUrl}}
        style={styles.image}
        imageStyle={styles.imageRadius}>
        <View style={styles.shadeTop} />
        <View style={styles.shadeBottom} />
        <View style={styles.topRow}>
          <View style={styles.viewsPill}>
            <Text style={styles.viewsText}>{video.viewsLabel}</Text>
          </View>
          <View style={styles.logo}>
            <Text style={styles.logoText}>S</Text>
          </View>
        </View>
        {variant !== 'square' ? (
          <Text style={styles.title} numberOfLines={1}>
            {video.title}
          </Text>
        ) : null}
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.lg,
    overflow: 'hidden',
    backgroundColor: colors.elevated,
  },
  grid: {
    width: half,
    height: half * 1.35,
    marginBottom: COL_GAP,
  },
  square: {
    width: (Dimensions.get('window').width - SCREEN_PAD * 2 - COL_GAP * 2) / 3,
    height: (Dimensions.get('window').width - SCREEN_PAD * 2 - COL_GAP * 2) / 3,
    marginBottom: COL_GAP,
  },
  wide: {
    width: '100%',
    height: 190,
    marginBottom: spacing.lg,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing.sm,
  },
  imageRadius: {
    borderRadius: radii.lg,
  },
  shadeTop: {
    ...StyleSheet.absoluteFillObject,
    height: '35%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  shadeBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '45%',
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 1,
  },
  viewsPill: {
    backgroundColor: colors.overlay,
    borderRadius: radii.sm,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  viewsText: {
    color: colors.text,
    fontSize: 11,
  },
  logo: {
    width: 22,
    height: 22,
    borderRadius: 6,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  title: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
    zIndex: 1,
  },
});
