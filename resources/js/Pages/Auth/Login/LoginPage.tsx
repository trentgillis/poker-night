import { Link, router, usePage } from '@inertiajs/react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  Checkbox,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Layout,
  Logo,
} from '@/components';

export default function LoginPage() {
  const errors = usePage().props.errors;
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: true,
    },
  });

  function onSubmit(formData: any) {
    router.post('/login', formData, {
      onFinish: () => form.resetField('password'),
    });
  }

  return (
    <Layout>
      <div className="my-20 flex flex-col justify-center px-2">
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <Logo variant="small" height={40} />
          <h2 className="mt-6 text-center text-xl font-semibold text-zinc-100">
            Sign In
          </h2>
        </div>
        <div className="mx-auto mt-10 w-full max-w-sm">
          <FormProvider {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              {errors['root'] && (
                <div className="mb-5 text-center text-sm text-red-400">
                  {errors['root']}
                </div>
              )}
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
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FormLabel>Remember me</FormLabel>
                    </div>
                  )}
                />
                <div>
                  <Link
                    className={'text-sm font-medium text-zinc-100'}
                    href={route('password.request')}
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <Button className="w-full">Sign In</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </Layout>
  );
}
