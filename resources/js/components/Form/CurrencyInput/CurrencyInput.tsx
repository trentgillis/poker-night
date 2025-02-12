import { DollarSign } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { Input } from '@/components';

export default function CurrencyInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <div className="relative">
      <DollarSign className="absolute top-1/2 left-[8px] my-auto h-4 w-4 -translate-y-1/2 transform" />
      <Input
        type="number"
        placeholder="0.00"
        className={twMerge('pl-6')}
        {...props}
      />
    </div>
  );
}
