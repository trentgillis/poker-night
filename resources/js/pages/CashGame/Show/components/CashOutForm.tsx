import { router, usePage } from '@inertiajs/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  CurrencyInput,
  FormField,
  FormItem,
  FormLabel,
} from '@/components';
import { CashGamePlayer } from '@/types/cash-game';

interface CashOutFormProps {
  player: CashGamePlayer;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CashOutForm({
  player,
  setDrawerOpen,
}: CashOutFormProps) {
  const errors = usePage().props.errors;
  const page = usePage();

  const form = useForm({
    defaultValues: {
      buyInAmt: (player.game_result.buy_in_amt / 100).toFixed(2),
      cashOutAmt: '',
    },
  });

  function onSubmit(formData: { buyInAmt: string; cashOutAmt: string }) {
    if (formData.buyInAmt === 'NaN') formData.buyInAmt = '';
    if (formData.cashOutAmt === 'NaN') formData.cashOutAmt = '';

    router.post(
      route('cash-games.cash-out', { cashGame: page.props.cash_game }),
      {
        buyInAmt: parseFloat(formData.buyInAmt) * 100,
        cashOutAmt: parseFloat(formData.cashOutAmt) * 100,
      },
      {
        onSuccess: () => setDrawerOpen(false),
      },
    );
  }

  return (
    <div className="px-4">
      <FormProvider {...form}>
        <form className="space-y-6 pt-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="buyInAmt"
            errors={errors}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Buy In Amount</FormLabel>
                <CurrencyInput {...field} />
              </FormItem>
            )}
          />
          <FormField
            name="cashOutAmt"
            errors={errors}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cash Out Amount</FormLabel>
                <CurrencyInput {...field} />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Cash Out
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
