import { Link, usePage } from '@inertiajs/react';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const { url } = usePage();

  return (
    <li>
      {/*Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700"*/}
      <Link
        href={href}
        className={`flex items-center rounded-sm ${url === href ? 'bg-zinc-800' : 'bg-zinc-950'} px-3 py-2 text-sm font-medium text-zinc-100`}
      >
        {children}
      </Link>
    </li>
  );
}
