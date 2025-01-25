import { Link as InertiaLink } from '@inertiajs/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Link({
  className,
  children,
  ...props
}: React.ComponentProps<typeof InertiaLink>) {
  return (
    <InertiaLink
      className={twMerge('font-semibold text-zinc-100', className)}
      {...props}
    >
      {children}
    </InertiaLink>
  );
}
