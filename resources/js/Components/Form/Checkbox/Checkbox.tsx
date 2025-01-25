import { useFormField } from '@/hooks/form';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Checkbox({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) {
  const { id } = useFormField();

  return (
    <CheckboxPrimitive.Root
      id={id}
      className={twMerge(
        'ring-offset-background focus-visible:ring-ring data-[state=checked]:text-background h-4 w-4 shrink-0 rounded-sm border border-white hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="text-background flex items-center justify-center">
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
