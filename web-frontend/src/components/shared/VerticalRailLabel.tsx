import { cn } from '@/lib/cn';

type Props = {
  label: string;
  className?: string;
};

/** Side tab used on mobile rails (Stories / Playlists). */
export function VerticalRailLabel({ label, className }: Props) {
  return (
    <div
      className={cn(
        'flex w-9 shrink-0 items-center justify-center rounded-l-xl bg-gradient-to-b from-[#5b4dff] to-[#2a1f8f]',
        className,
      )}
      aria-hidden
    >
      <span className="rotate-180 text-[11px] font-semibold tracking-wide text-white [writing-mode:vertical-rl]">
        {label}
      </span>
    </div>
  );
}
