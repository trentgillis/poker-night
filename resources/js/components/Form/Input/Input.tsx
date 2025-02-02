import { useFormField } from '@/hooks';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import InputError from './InputError';

export default function Input({
  type = 'text',
  className,
  ...props
}: React.ComponentProps<'input'>) {
  const { id, error } = useFormField();

  return (
    <>
      <input
        id={id}
        type={type}
        className={twMerge(
          'color-white border-border bg-background ring-offset-background focus-visible:border-border focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden',
          className,
        )}
        {...props}
      />
      <InputError error={error} />
    </>
  );
}
