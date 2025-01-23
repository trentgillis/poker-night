import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import React from 'react';

import { Logo } from '@/components';

interface HeaderProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setMenuOpen }: HeaderProps) {
  return (
    <header className="flex h-14 w-full items-center justify-between border-b border-zinc-400/50 px-4">
      <div className="flex flex-1 justify-start">
        <Link href="/">
          <Logo height={20} />
        </Link>
      </div>
      <div>
        <button
          type="button"
          className="-mr-4 flex h-12 w-12 items-center justify-center"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={20} strokeWidth={1} />
        </button>
      </div>
    </header>
  );
}
