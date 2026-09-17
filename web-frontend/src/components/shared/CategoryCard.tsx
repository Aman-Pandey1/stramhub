import Image from 'next/image';
import type { CategoryItem } from '@/types/content';

type Props = {
  item: CategoryItem;
};

export function CategoryCard({ item }: Props) {
  return (
    <article className="group relative h-[120px] overflow-hidden rounded-2xl border border-white/5 bg-elevated">
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover opacity-55 transition duration-300 group-hover:scale-105 group-hover:opacity-70"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-between px-4 py-3">
        <div>
          <h3 className="text-base font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-xs text-white/65">{item.videoCountLabel}</p>
        </div>
        <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/10 shadow-card">
          <Image src={item.imageUrl} alt="" fill className="object-cover" sizes="64px" />
        </div>
      </div>
    </article>
  );
}
