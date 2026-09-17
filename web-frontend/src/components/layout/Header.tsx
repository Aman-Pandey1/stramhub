'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell, Menu, Search, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { routes } from '@/lib/routes';

type Props = {
  showLogo?: boolean;
};

export function Header({ showLogo = true }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/5 bg-canvas/95 backdrop-blur-md">
        {/* Mobile */}
        <div className="flex h-14 items-center justify-between gap-3 px-4 lg:hidden">
          <Link
            href={routes.home}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a2744] text-sm font-bold text-white"
          >
            S
          </Link>
          <button
            type="button"
            className="inline-flex h-9 items-center rounded-full bg-brand px-4 text-sm font-medium text-white"
          >
            Upload video +
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-white"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden h-16 items-center justify-between gap-4 px-5 lg:flex">
          <div className="flex items-center gap-3">
            {showLogo ? (
              <Link
                href={routes.home}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white"
              >
                S
              </Link>
            ) : null}
            <Button variant="outline" className="border-brand/80 bg-brand/15 text-white hover:bg-brand/25">
              <Upload size={16} />
              Upload video +
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:bg-white/5 hover:text-white"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:bg-white/5 hover:text-white"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <Link
              href={routes.profile}
              className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/10"
            >
              <Image
                src="https://i.pravatar.cc/100?img=8"
                alt="Your profile"
                fill
                className="object-cover"
                sizes="36px"
              />
            </Link>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col bg-[#111] p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Menu</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close">
                <X size={20} className="text-white" />
              </button>
            </div>
            <Link
              href={routes.home}
              className="rounded-xl px-3 py-3 text-sm text-white hover:bg-white/5"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={routes.profile}
              className="rounded-xl px-3 py-3 text-sm text-white hover:bg-white/5"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
