import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  CurrencyInput,
  FormField,
  FormItem,
  FormLabel,
} from '@/components';

export default function CashOutForm() {
  const form = useForm();

  function onSubmit(formData: any) {
    console.log(formData);
  }

  return (
    <div className="px-4">
      <FormProvider {...form}>
        <form className="space-y-6 pt-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Buy In Amount</FormLabel>
                <CurrencyInput />
              </FormItem>
            )}
          />
          <FormField
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cash Out Amount</FormLabel>
                <CurrencyInput />
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
