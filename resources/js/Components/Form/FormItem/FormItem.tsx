import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function FormItem({
  className,
  children,
}: React.ComponentProps<'div'>) {
  return <div className={twMerge('space-y-2', className)}>{children}</div>;
}
