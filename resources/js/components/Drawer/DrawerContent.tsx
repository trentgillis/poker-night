import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Drawer as DrawerPrimitive } from 'vaul';

export default function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" />
      <DrawerPrimitive.Content
        className={twMerge(
          'bg-background border-border fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border',
          className,
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  );
}
