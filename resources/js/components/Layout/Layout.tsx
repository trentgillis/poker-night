import React from 'react';

import { Toaster } from '@/components';
import { useToast } from '@/hooks';
import { useFlash } from '@/hooks/use-flash';

import { usePage } from '@inertiajs/react';
import Header from './Header';
import InProgressGameBanner from './InProgressGameBanner';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const page = usePage();
  const flash = useFlash();
  const toast = useToast();
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (flash.success) toast.success(flash.success);
    if (flash.error) toast.error(flash.error);
    if (flash.message) toast(flash.message);
  }, [flash]);

  const showInProgressGameBanner =
    page.props.in_progress &&
    !route().current('login') &&
    !route().current('register');

  return (
    <>
      <Header setMenuOpen={setMenuOpen} />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="mx-auto mt-6 max-w-2xl px-4">
        {showInProgressGameBanner && <InProgressGameBanner />}
        <div className="mt-6">{children}</div>
      </main>
      <Toaster />
    </>
  );
}
