export function chunk<T>(list: T[], size: number): T[][] {
  if (size <= 0) return [list];
  const out: T[][] = [];
  for (let i = 0; i < list.length; i += size) {
    out.push(list.slice(i, i + size));
  }
  return out;
}
