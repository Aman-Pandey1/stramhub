import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, radii, spacing} from '../../theme/tokens';

type Props = {
  onOpenMenu: () => void;
};

export function HomeTopBar({onOpenMenu}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>S</Text>
      </View>

      <Pressable style={styles.upload}>
        <Text style={styles.uploadLabel}>Upload video +</Text>
      </Pressable>

      <Pressable style={styles.menu} onPress={onOpenMenu} hitSlop={8}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
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
  upload: {
    borderWidth: 1,
    borderColor: colors.brand,
    backgroundColor: 'rgba(124,58,237,0.18)',
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  uploadLabel: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
  },
  menu: {
    width: 34,
    height: 34,
    justifyContent: 'center',
  },
  bar: {
    height: 2,
    backgroundColor: colors.text,
    borderRadius: 2,
    marginVertical: 2.5,
  },
});
