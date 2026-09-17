/**
 * Navigation helpers — keep route strings in one place so we don't
 * sprinkle magic paths through JSX.
 */
export const routes = {
  home: '/',
  profile: '/profile',
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
