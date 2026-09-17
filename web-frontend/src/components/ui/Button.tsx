import { cn } from '@/lib/cn';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Variant = 'primary' | 'ghost' | 'soft' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
  }
>;

const variantClass: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-soft border border-transparent',
  ghost: 'bg-transparent text-white border border-white/20 hover:bg-white/5',
  soft: 'bg-white/10 text-white border border-white/10 hover:bg-white/15',
  outline: 'bg-transparent text-brand border border-brand hover:bg-brand/10',
};

const sizeClass: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-sm',
};

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:opacity-50',
        variantClass[variant],
        sizeClass[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
