import React from 'react';

import { Logo } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Logo></Logo>
      this is a layout
      <main>{children}</main>
    </div>
  );
}
