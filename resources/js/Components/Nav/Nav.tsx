import { Link } from '@inertiajs/react';

import { Logo } from '@/components';
import { Menu } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="flex h-14 w-full items-center justify-between border-b border-zinc-400 px-4">
      <div className="flex flex-1 justify-start">
        <Link href="/">
          <Logo height={20} />
        </Link>
      </div>
      <div>
        <button
          type="button"
          className="-mr-4 flex h-12 w-12 items-center justify-center"
        >
          <Menu size={20} strokeWidth={1} />
        </button>
      </div>
    </nav>
  );
}
