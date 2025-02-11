import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function DrawerFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('mt-auto flex flex-col gap-2 px-4 py-2', className)}
      {...props}
    >
      {children}
    </div>
  );
}
