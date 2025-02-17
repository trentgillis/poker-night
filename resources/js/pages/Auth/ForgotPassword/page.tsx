import { router, usePage } from '@inertiajs/react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Layout,
  Logo,
} from '@/components';

export default function ForgotPasswordPage() {
  const errors = usePage().props.errors;
  const form = useForm({
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(formData: { email: string }) {
    router.post(route('password.email'), formData);
  }

  return (
    <Layout>
      <div className="mt-20 mb-6 flex flex-col justify-center px-2">
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <Logo variant="small" height={40} />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="mt-6 text-center text-xl font-semibold text-zinc-100">
              Reset Password
            </h2>
            <p className="text-sm">
              Enter the email address associated with your account and we'll
              send you a link to reset your password
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <FormProvider {...form}>
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
            <Button className="w-full" type="submit">
              Send Reset Instructions
            </Button>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
}
