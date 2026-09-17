import { Eye, Heart, Share2, UserRound, Video } from 'lucide-react';
import type { CreatorProfile } from '@/types/content';

type Props = {
  profile: CreatorProfile;
};

const iconMap = {
  eye: Eye,
  heart: Heart,
  visit: UserRound,
  share: Share2,
  video: Video,
};

export function AboutSidebar({ profile }: Props) {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-3 text-sm font-semibold text-white">About Your Profile</h2>
        <div className="grid grid-cols-2 gap-2">
          {profile.metrics.map((metric) => {
            const Icon = iconMap[metric.icon];
            return (
              <div
                key={metric.id}
                className="rounded-2xl border border-white/5 bg-elevated px-3 py-3"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand/20 text-brand-glow">
                  <Icon size={14} />
                </div>
                <p className="text-base font-semibold text-white">{metric.value}</p>
                <p className="text-[11px] text-muted">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold text-white">Your videos Categories</h2>
        <div className="flex flex-wrap gap-2">
          {profile.categories.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand/25 px-3 py-1.5 text-xs text-brand-glow"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
