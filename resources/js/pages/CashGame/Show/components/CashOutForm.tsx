import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  CurrencyInput,
  FormField,
  FormItem,
  FormLabel,
} from '@/components';

export default function CashOutForm() {
  const form = useForm({
    defaultValues: {
      buyInAmt: '',
      cashOutAmt: '',
    },
  });

  function onSubmit(formData: any) {
    console.log(formData);
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
