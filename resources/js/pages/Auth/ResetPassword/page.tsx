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
import { router, usePage } from '@inertiajs/react';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
  token: string;
  email: string;
}

interface ResetPasswordPageProps {
  token: string;
  email: string;
  errors: string[];
}

export default function ResetPasswordPage({
  token,
  email,
  errors,
}: ResetPasswordPageProps) {
  const page = usePage();
  const form = useForm<ResetPasswordFormData>({
    defaultValues: {
      password: '',
      password_confirmation: '',
      token,
      email,
    },
  });

  function onSubmit(formData: ResetPasswordFormData) {
    router.post(route('password.store'), formData as any);
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
              Enter a new password below to finish resetting your password
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
              errors={page.props.errors}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input type="text" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              errors={page.props.errors}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password_confirmation"
              errors={page.props.errors}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" {...field} />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Reset
            </Button>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
}
