import { type ClassValue, clsx } from 'clsx';

export function cn(...parts: ClassValue[]) {
  return clsx(parts);
}
