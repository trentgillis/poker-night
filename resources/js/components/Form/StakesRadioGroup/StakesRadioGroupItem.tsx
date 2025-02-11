import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleCheck } from 'lucide-react';
import React from 'react';

interface StakesRadioGroupItemProps
  extends React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Item> {
  label: string;
}

export default function StakesRadioGroupItem({
  label,
  value,
  ...props
}: StakesRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      value={value}
      className="border-border flex w-full items-center justify-between rounded-md border px-3 py-4 data-[state=checked]:border-white"
      {...props}
    >
      <span className="text-sm font-medium">{label}</span>
      <RadioGroupPrimitive.Indicator className="h-5 w-5">
        <CircleCheck className="text-background h-5 w-5 fill-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}
