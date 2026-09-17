'use client';

import Image from 'next/image';
import {
  BadgeCheck,
  Gift,
  Globe2,
  MapPin,
  Share2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { CreatorProfile } from '@/types/content';

type Props = {
  profile: CreatorProfile;
};

export function ProfileHeader({ profile }: Props) {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/5 bg-surface">
      <div className="relative h-36 w-full sm:h-44">
        <Image src={profile.coverUrl} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/20 to-transparent" />
      </div>

      <div className="relative px-5 pb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="-mt-12 flex items-end gap-4">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-surface bg-black">
              <Image src={profile.avatarUrl} alt={profile.displayName} fill className="object-cover" sizes="112px" />
            </div>
            <div className="pb-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-semibold text-white">{profile.displayName}</h1>
                {profile.verified ? <BadgeCheck className="text-yellow-400" size={20} fill="currentColor" /> : null}
              </div>
              {profile.available ? (
                <p className="mt-1 flex items-center gap-2 text-sm text-white/70">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available Now
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button>Follow</Button>
            <Button variant="ghost">Message</Button>
            <Button variant="soft">
              <Gift size={16} />
              Gift
            </Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
          <span>
            <strong className="text-white">{profile.following}</strong> Following
          </span>
          <span>
            <strong className="text-white">{profile.views}</strong> View
          </span>
          <span>
            <strong className="text-white">{profile.likes}</strong> Likes
          </span>
          <button type="button" className="ml-auto text-white/60 hover:text-white" aria-label="Share profile">
            <Share2 size={16} />
          </button>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">{profile.bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-brand/20 px-3 py-1 text-xs text-brand-glow">
            {profile.freePlaylists} Free Playlists
          </span>
          <span className="rounded-full bg-brand/20 px-3 py-1 text-xs text-brand-glow">
            {profile.paidPlaylists} Paid Playlists
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
            <MapPin size={12} />
            {profile.location}
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">{profile.joined}</span>
          <a
            href="#"
            className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-sky-400 hover:text-sky-300"
          >
            <Globe2 size={12} />
            {profile.website}
          </a>
        </div>
      </div>
    </section>
  );
}
