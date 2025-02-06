import { router, usePage } from '@inertiajs/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  FormField,
  FormItem,
  FormLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';

interface CashGameFormProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CashGameForm({ setDrawerOpen }: CashGameFormProps) {
  const errors = usePage().props.errors;
  const form = useForm({
    defaultValues: {
      date: Date.now(),
      stakes: '10NL',
      status: 'in_progress',
    },
  });

  function onSubmit(formData: any) {
    router.post(route('cash-games.store'), formData, {
      onFinish: () => setDrawerOpen(false),
    });
  }

  return (
    <div className="px-4">
      <FormProvider {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="stakes"
            errors={errors}
            render={({ field }) => (
              <FormItem className="py-6">
                <FormLabel>Stakes</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={'Game Stakes'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'10NL'}>10NL</SelectItem>
                    <SelectItem value={'50NL'}>50NL</SelectItem>
                    <SelectItem value={'NL1'}>NL1</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button className="w-full">Create</Button>
        </form>
      </FormProvider>
    </div>
  );
}
