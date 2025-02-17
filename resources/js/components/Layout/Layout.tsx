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
  hideInProgressBanner?: boolean;
}

export default function Layout({
  hideInProgressBanner = false,
  children,
}: LayoutProps) {
  const page = usePage();
  const flash = useFlash();
  const toast = useToast();
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (flash.success) toast.success(flash.success);
    if (flash.error) toast.error(flash.error);
    if (flash.message) toast(flash.message);
  }, [flash]);

  return (
    <div className="flex h-full grow flex-col">
      <Header setMenuOpen={setMenuOpen} />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="mt-6 flex w-full max-w-2xl grow flex-col px-4 lg:mx-auto">
        {!hideInProgressBanner &&
          page.props.in_progress &&
          !page.props.user_joined_game && (
            <InProgressGameBanner inProgressGame={page.props.in_progress} />
          )}
        {children}
      </main>
      <Toaster />
    </div>
  );
}
