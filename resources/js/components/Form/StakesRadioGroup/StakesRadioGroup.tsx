import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { StakesRadioGroupItem } from '@/components';
import {
  getStakesLabelStrings,
  getStakesValueStrings,
} from '@/components/Form/StakesRadioGroup/stakes-radio-group-utils';
import { CashGameStakes } from '@/types/cash-game';

interface StakesRadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  stakes: CashGameStakes;
}

export default function StakesRadioGroup({
  stakes,
  className,
  children,
  ...props
}: StakesRadioGroupProps) {
  const values = getStakesValueStrings(stakes);
  const labels = getStakesLabelStrings(stakes);

  return (
    <RadioGroupPrimitive.Root
      className={twMerge('flex gap-2', className)}
      {...props}
    >
      <StakesRadioGroupItem label={labels[0]} value={values[0]} />
      <StakesRadioGroupItem label={labels[1]} value={values[1]} />
    </RadioGroupPrimitive.Root>
  );
}
