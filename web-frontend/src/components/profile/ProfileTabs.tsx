'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import type { ProfileTab } from '@/types/content';

const tabs: { id: ProfileTab; label: string }[] = [
  { id: 'long', label: 'Long video' },
  { id: 'short', label: 'Short video' },
  { id: 'playlist', label: 'Playlist' },
  { id: 'guestbook', label: 'Guestbook' },
];

type Props = {
  active?: ProfileTab;
  onChange?: (tab: ProfileTab) => void;
};

export function ProfileTabs({ active = 'short', onChange }: Props) {
  const [current, setCurrent] = useState<ProfileTab>(active);

  function select(tab: ProfileTab) {
    setCurrent(tab);
    onChange?.(tab);
  }

  return (
    <div className="flex gap-6 border-b border-white/10">
      {tabs.map((tab) => {
        const isActive = current === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => select(tab.id)}
            className={cn(
              'relative pb-3 text-sm transition',
              isActive ? 'font-medium text-white' : 'text-white/50 hover:text-white/80',
            )}
          >
            {tab.label}
            {isActive ? <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-white" /> : null}
          </button>
        );
      })}
    </div>
  );
}
