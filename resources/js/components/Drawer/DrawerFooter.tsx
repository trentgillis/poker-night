import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function DrawerFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}
