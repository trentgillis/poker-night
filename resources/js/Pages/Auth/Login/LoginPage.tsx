import { router, usePage } from '@inertiajs/react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  Checkbox,
  FormItem,
  Input,
  InputError,
  Label,
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
              <FormItem>
                <Label htmlFor="email">Email</Label>
                <Input type="text" id="email" {...form.register('email')} />
                <InputError error={errors['email']} />
              </FormItem>
              <FormItem>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  {...form.register('password')}
                />
                <InputError error={errors['password']} />
              </FormItem>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" {...form.register('remember')} />
                  <label
                    htmlFor="remember"
                    className="font-zinc-100 text-sm leading-none"
                  >
                    Remember me
                  </label>
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
