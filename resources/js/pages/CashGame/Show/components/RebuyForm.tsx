import { router, usePage } from '@inertiajs/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, FormField, StakesRadioGroup } from '@/components';
import { getStakesValueStrings } from '@/util';

interface RebuyFormProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RebuyForm({ setDrawerOpen }: RebuyFormProps) {
  const page = usePage();
  const form = useForm({
    defaultValues: { stakes: getStakesValueStrings('10NL')[1] },
  });

  function onSubmit(formData: any) {
    router.post(
      route('cash-games.rebuy', { cashGame: page.props.cash_game }),
      formData,
      {
        onSuccess: () => setDrawerOpen(false),
      },
    );
  }

  return (
    <div className="px-4">
      <FormProvider {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="stakes"
            render={({ field }) => (
              <div className="pt-5 pb-4">
                <StakesRadioGroup
                  stakes="10NL"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                />
              </div>
            )}
          />
          <Button className="w-full">Rebuy</Button>
        </form>
      </FormProvider>
    </div>
  );
}
