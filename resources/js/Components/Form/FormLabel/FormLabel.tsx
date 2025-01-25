import { useFormField } from '@/hooks/form';
import { Label as LabelPrimitive } from '@radix-ui/react-label';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function FormLabel({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive>) {
  const { id } = useFormField();

  return (
    <LabelPrimitive
      htmlFor={id}
      className={twMerge('color-white text-sm', className)}
      {...rest}
    >
      {children}
    </LabelPrimitive>
  );
}
