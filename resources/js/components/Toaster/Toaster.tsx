import React from 'react';
import { Toaster as Sonner } from 'sonner';

export default function Toaster({
  ...props
}: React.ComponentProps<typeof Sonner>) {
  return (
    <Sonner
      theme="dark"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-white group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:!text-white-muted',
        },
      }}
      {...props}
    />
  );
}
