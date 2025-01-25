import React from 'react';

import { Header, Nav } from '@/components';

import { usePage } from '@inertiajs/react';
import { UserContext } from './UserContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const user = usePage().props.auth.user;
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  return (
    <UserContext value={user}>
      <Header setMenuOpen={setMenuOpen} />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="mx-auto mt-6 max-w-2xl px-4">{children}</main>
    </UserContext>
  );
}
