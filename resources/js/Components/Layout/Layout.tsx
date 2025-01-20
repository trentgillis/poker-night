import React from 'react';

import { Nav } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main className="mx-auto mt-6 max-w-2xl px-4">{children}</main>
    </>
  );
}
