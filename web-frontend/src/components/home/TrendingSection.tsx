import Link from 'next/link';
import { Search } from 'lucide-react';
import type { TrendTag } from '@/types/content';

type Props = {
  tags: TrendTag[];
};

export function TrendingSection({ tags }: Props) {
  return (
    <section className="space-y-3 px-4 lg:hidden">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-1.5 text-[15px] font-semibold text-white">
          <span aria-hidden>⭐</span>
          Trending this week
        </h2>
        <Link href="#trends" className="text-sm text-white/55">
          All trends
        </Link>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-[#151515] px-3.5 py-2 text-xs text-white/80"
          >
            <Search size={12} className="text-white/45" />
            {tag.label}
          </button>
        ))}
      </div>
    </section>
  );
}
