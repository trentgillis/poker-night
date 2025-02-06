import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function DrawerHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('grid gap-1.5 p-4 text-center', className)}
      {...props}
    >
      {children}
    </div>
  );
}
