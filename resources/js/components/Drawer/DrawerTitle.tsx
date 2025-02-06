import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Drawer as DrawerPrimitive } from 'vaul';

export default function DrawerTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      className={twMerge(
        'text-lg leading-none font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </DrawerPrimitive.Title>
  );
}
