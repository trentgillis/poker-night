import { router, usePage } from '@inertiajs/react';
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
}

export default function CashOutForm({ player }: CashOutFormProps) {
  const page = usePage();

  const form = useForm({
    defaultValues: {
      buyInAmt: (player.game_result.buy_in_amt / 100).toFixed(2),
      cashOutAmt: '',
    },
  });

  function onSubmit(formData: any) {
    router.post(
      route('cash-games.cash-out', { cashGame: page.props.cash_game }),
      formData,
    );
  }

  return (
    <div className="px-4">
      <FormProvider {...form}>
        <form className="space-y-6 pt-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="buyInAmt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Buy In Amount</FormLabel>
                <CurrencyInput {...field} />
              </FormItem>
            )}
          />
          <FormField
            name="cashOutAmt"
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
