import { useFormField } from '@/hooks';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import InputError from './InputError';

export default function Input({
  type = 'text',
  className,
  icon: Icon,
  ...props
}: React.ComponentProps<'input'> & { icon?: React.ComponentType<any> }) {
  const { id, error } = useFormField();

  return (
    <>
      <div className="relative">
        {Icon && (
          <Icon className="absolute top-1/2 left-[8px] my-auto h-4 w-4 -translate-y-1/2 transform" />
        )}
        <input
          id={id}
          type={type}
          className={twMerge(
            'color-white border-border bg-background ring-offset-background focus-visible:border-border focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden',
            className,
          )}
          {...props}
        />
      </div>
      <InputError error={error} />
    </>
  );
}
