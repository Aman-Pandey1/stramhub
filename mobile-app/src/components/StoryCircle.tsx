import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, radii, spacing } from '../theme/tokens';
import type { StoryItem } from '../types/content';

type Props = {
  story: StoryItem;
  onPress?: () => void;
};

export function StoryCircle({ story, onPress }: Props) {
  if (story.isCreate) {
    return (
      <Pressable style={styles.wrap} onPress={onPress}>
        <View style={[styles.avatar, styles.create]}>
          <Text style={styles.plus}>+</Text>
        </View>
        <Text style={styles.label} numberOfLines={1}>
          Create new
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable style={styles.wrap} onPress={onPress}>
      <View style={styles.ring}>
        <Image source={{ uri: story.avatarUrl }} style={styles.avatarImg} />
      </View>
      {story.trending ? <Text style={styles.fire}>🔥</Text> : null}
      <Text style={styles.label} numberOfLines={1}>
        {story.username}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: 72,
    alignItems: 'center',
    marginRight: spacing.md,
  },
  ring: {
    padding: 2,
    borderRadius: radii.pill,
    borderWidth: 2,
    borderColor: colors.brand,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImg: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  create: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(255,255,255,0.3)',
    backgroundColor: colors.elevated,
  },
  plus: {
    color: colors.text,
    fontSize: 24,
    lineHeight: 28,
  },
  label: {
    marginTop: spacing.sm,
    color: 'rgba(255,255,255,0.8)',
    fontSize: 11,
    width: '100%',
    textAlign: 'center',
  },
  fire: {
    position: 'absolute',
    right: 2,
    top: -2,
    fontSize: 12,
  },
});
