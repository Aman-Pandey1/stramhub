'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';

type Props = {
  children: React.ReactNode;
  rightPanel?: React.ReactNode;
};

export function AppShell({ children, rightPanel }: Props) {
  return (
    <div className="min-h-screen bg-canvas">
      <Sidebar />
      <div className="lg:pl-[72px]">
        <Header showLogo={false} />
        <div className={rightPanel ? 'grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px]' : ''}>
          <main className="min-w-0 px-0 py-3 lg:px-5 lg:py-5">{children}</main>
          {rightPanel ? (
            <aside className="hidden border-l border-white/5 px-4 py-5 xl:block">{rightPanel}</aside>
          ) : null}
        </div>
      </div>
    </div>
  );
}
