import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors, radii } from '../theme/tokens';

type Variant = 'primary' | 'ghost' | 'soft';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  style?: ViewStyle;
};

export function PillButton({ label, onPress, variant = 'primary', style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'ghost' && styles.ghost,
        variant === 'soft' && styles.soft,
        style,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 44,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  primary: {
    backgroundColor: colors.brand,
  },
  ghost: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  soft: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
});
