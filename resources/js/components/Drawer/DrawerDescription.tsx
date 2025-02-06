import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Drawer as DrawerPrimitive } from 'vaul';

export default function DrawerDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      className={twMerge('text-white-muted text-sm', className)}
      {...props}
    >
      {children}
    </DrawerPrimitive.Description>
  );
}
