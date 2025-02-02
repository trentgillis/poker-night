import { Link } from '@inertiajs/react';
import React from 'react';

interface NavLinkProps {
  routeName: string;
  children: React.ReactNode;
}

export default function NavLink({ routeName, children }: NavLinkProps) {
  return (
    <li>
      {/*Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700"*/}
      <Link
        href={route(routeName)}
        className={`flex items-center rounded-sm ${route().current(routeName) ? 'bg-background-muted' : 'bg-background'} px-3 py-2 text-sm font-medium text-white`}
      >
        {children}
      </Link>
    </li>
  );
}
