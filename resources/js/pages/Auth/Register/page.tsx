import { router, usePage } from '@inertiajs/react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Layout,
  Link,
  Logo,
} from '@/components';

export default function RegisterPage() {
  const errors = usePage().props.errors;
  const form = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  function onSubmit(formData: any) {
    router.post(route('register'), formData);
  }

  return (
    <Layout hideInProgressBanner>
      <div className="mt-12 pb-12">
        <div className="flex flex-col justify-center px-2">
          <div className="mx-auto flex w-full max-w-sm flex-col">
            <Logo variant="small" height={40} />
            <h2 className="mt-6 text-center text-xl font-semibold text-white">
              Sign Up
            </h2>
          </div>
          <div className="mx-auto mt-10 w-full max-w-sm">
            <FormProvider {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {errors['root'] && (
                  <div className="mb-5 text-center text-sm text-red-400">
                    {errors['root']}
                  </div>
                )}
                <FormField
                  control={form.control}
                  name="first_name"
                  errors={errors}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" {...field} />
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
                      <Input type="text" {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  errors={errors}
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
                  errors={errors}
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
                  errors={errors}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input type="password" {...field} />
                    </FormItem>
                  )}
                />
                <Button className="w-full">Sign Up</Button>
              </form>
            </FormProvider>
            <div className="mt-10 text-center text-sm text-zinc-300">
              Already have an account?{' '}
              <Link href={route('login')}>Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
