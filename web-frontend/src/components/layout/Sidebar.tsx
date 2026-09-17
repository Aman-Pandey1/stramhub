'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Clock3,
  Compass,
  Film,
  Hash,
  Home,
  LayoutGrid,
  Video,
} from 'lucide-react';
import { SITE } from '@/config/site';
import { cn } from '@/lib/cn';

const items = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/#reels', icon: Video, label: 'Reels' },
  { href: '/#playlists', icon: Film, label: 'Playlists' },
  { href: '/profile', icon: LayoutGrid, label: 'Library' },
  { href: '/#explore', icon: Compass, label: 'Explore' },
  { href: '/#tags', icon: Hash, label: 'Tags' },
  { href: '/#history', icon: Clock3, label: 'History' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[72px] flex-col items-center border-r border-white/5 bg-black/90 py-4 lg:flex">
      <Link
        href="/"
        className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white"
        aria-label={`${SITE.name} home`}
      >
        {SITE.brandLetter}
      </Link>

      <nav className="flex flex-1 flex-col items-center gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-xl text-white/55 transition hover:bg-white/5 hover:text-white',
                active && 'bg-white/10 text-white',
              )}
            >
              <Icon size={20} strokeWidth={1.7} />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
