import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Input({
  type = 'text',
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={twMerge(
        'color-zinc-100 flex h-10 w-full rounded-md border border-zinc-400/50 bg-zinc-950 px-3 py-2 text-sm ring-offset-zinc-950 focus-visible:border-zinc-400/50 focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:outline-hidden',
        className,
      )}
      {...props}
    />
  );
}
