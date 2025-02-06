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
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  errors: Record<string, string>;
}

export default function CashGameForm({
  setDrawerOpen,
  errors,
  setErrors,
}: CashGameFormProps) {
  const pageErrors = usePage().props.errors;
  const form = useForm({
    defaultValues: {
      date: new Date().toLocaleDateString('en-US'),
      stakes: '10NL',
      status: 'in_progress',
    },
  });

  function onSubmit(formData: any) {
    router.post(route('cash-games.store'), formData, {
      onError: (errors) => setErrors(errors),
      onSuccess: () => setDrawerOpen(false),
    });
  }

  return (
    <div className="px-4">
      <FormProvider {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          {errors?.root && (
            <div className="mb-3 text-center text-sm text-red-400">
              {errors.root}
            </div>
          )}
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
