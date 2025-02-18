import { router } from '@inertiajs/react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, FormField, FormItem, FormLabel, Input } from '@/components';

interface UpdatePasswordFormData {
  current_password: string;
  password: string;
  password_confirmation: string;
}

interface UpdatePasswordFormProps {
  errors: Record<string, string>;
}

export default function UpdatePasswordForm({
  errors,
}: UpdatePasswordFormProps) {
  const form = useForm<UpdatePasswordFormData>({
    defaultValues: {
      current_password: '',
      password: '',
      password_confirmation: '',
    },
  });

  function onSubmit(formData: UpdatePasswordFormData) {
    router.put(route('password.update'), formData as any, {
      preserveScroll: true,
      onSuccess: () => form.reset(),
      onError: () => {
        if (errors['password'] || errors['current_password']) {
          form.reset();
        }
      },
    });
  }

  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-8 pt-8 pb-10">
        <div>
          <h2 className="text-base/7 font-semibold">Update Password</h2>
          <p className="text-white-muted mt-1 text-xs/4">
            Change the password associated with your account
          </p>
        </div>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="current_password"
            errors={errors}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <Input type="password" {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            errors={errors}
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <Input type="password" {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password_confirmation"
            errors={errors}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" {...field} />
              </FormItem>
            )}
          />
          <Button variant="secondary" className="w-full" type="submit">
            Update Password
          </Button>
        </form>
      </div>
    </FormProvider>
  );
}
