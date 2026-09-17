/**
 * Small human-ish helpers used across screens.
 * Kept separate from component files so screens stay readable.
 */

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${String(x)}`);
}
