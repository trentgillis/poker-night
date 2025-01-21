import React from 'react';

import { Header, Nav } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  return (
    <>
      <Header setMenuOpen={setMenuOpen} />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="mx-auto mt-6 max-w-2xl px-4">{children}</main>
    </>
  );
}
