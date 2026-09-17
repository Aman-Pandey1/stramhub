import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, radii, spacing} from '../../theme/tokens';
import type {TrendTag} from '../../types/content';

type Props = {
  tags: TrendTag[];
};

export function HomeTrendStrip({tags}: Props) {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Trending this week</Text>
        <Pressable>
          <Text style={styles.link}>All trends</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tags}>
        {tags.map(tag => (
          <View key={tag.id} style={styles.chip}>
            <Text style={styles.chipText}>{tag.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
  link: {
    color: colors.muted,
    fontSize: 13,
  },
  tags: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  chip: {
    borderRadius: radii.pill,
    backgroundColor: colors.elevated,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: spacing.sm,
  },
  chipText: {
    color: colors.textDim,
    fontSize: 12,
  },
});
