import { DollarSign } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { Input } from '@/components';

export default function CurrencyInput({
  onChange,
  className,
  ...props
}: React.ComponentProps<'input'>) {
  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (onChange) {
      const formatted = (
        Math.floor(parseFloat(e.target.value) * 100) / 100
      ).toFixed(2);

      onChange(formatted as any);
    }
  }

  return (
    <Input
      type="number"
      placeholder="0.00"
      className={twMerge('pl-6')}
      onChange={onChange}
      {...props}
      onBlur={handleBlur}
      icon={DollarSign}
    />
  );
}
