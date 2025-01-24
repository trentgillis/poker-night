import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function FormItem({
  className,
  children,
}: React.ComponentProps<'div'>) {
  return (
    <div className={twMerge('flex flex-col gap-1.5', className)}>
      {children}
    </div>
  );
}
