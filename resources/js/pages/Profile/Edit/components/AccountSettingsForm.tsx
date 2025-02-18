import { router } from '@inertiajs/react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, FormField, FormItem, FormLabel, Input } from '@/components';
import { useUser } from '@/hooks';

interface AccountSettingsFormData {
  email: string;
  first_name: string;
  last_name: string;
}

interface AccountSettingsFormProps {
  errors: Record<string, string>;
}

export default function AccountSettingsForm({
  errors,
}: AccountSettingsFormProps) {
  const user = useUser();
  const form = useForm<AccountSettingsFormData>({
    defaultValues: {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    },
  });

  function onSubmit(formData: AccountSettingsFormData) {
    router.patch(route('profile.update'), formData as any);
  }

  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-8 pt-8 pb-10">
        <div>
          <h2 className="text-base/7 font-semibold">Profile Information</h2>
          <p className="text-white-muted mt-1 text-xs/4">
            Change the name email associated with your account
          </p>
        </div>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            errors={errors}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="first_name"
            errors={errors}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <Input {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            errors={errors}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <Input {...field} />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Save
          </Button>
        </form>
      </div>
    </FormProvider>
  );
}
