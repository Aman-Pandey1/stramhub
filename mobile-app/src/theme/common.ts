import { StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/tokens';

/** Shared layout bits that don't deserve their own component yet. */
export const common = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  padded: {
    paddingHorizontal: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  muted: {
    color: colors.muted,
  },
});
