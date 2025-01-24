import { Label as LabelPrimitive } from '@radix-ui/react-label';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Label({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive>) {
  return (
    <LabelPrimitive
      className={twMerge('color-zinc-100 text-sm', className)}
      {...rest}
    >
      {children}
    </LabelPrimitive>
  );
}
