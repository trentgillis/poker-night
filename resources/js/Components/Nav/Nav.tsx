import { Link } from '@inertiajs/react';

import { Logo } from '@/components';
import { Menu } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="flex h-14 w-full items-center border-b border-zinc-400">
      <div className="w-full flex-1">
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center"
        >
          <Menu size={20} strokeWidth={1} />
        </button>
      </div>
      <div className="flex flex-1 justify-center">
        <Link href="/">
          <Logo height={20} />
        </Link>
      </div>
      <div className="flex-1"></div>
    </nav>
  );
}
