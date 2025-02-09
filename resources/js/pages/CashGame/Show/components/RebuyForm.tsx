import { router, usePage } from '@inertiajs/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/components';

interface RebuyFormProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RebuyForm({ setDrawerOpen }: RebuyFormProps) {
  const page = usePage();
  const form = useForm();

  function onSubmit(formData: any) {
    router.post(
      route('cash-game.rebuy', { cashGame: page.props.cash_game }),
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
          <Button className="w-full">Rebuy</Button>
        </form>
      </FormProvider>
    </div>
  );
}
