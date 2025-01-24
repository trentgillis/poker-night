import { router, usePage } from '@inertiajs/react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
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
    mode: 'onBlur',
  });

  function onSubmit(formData: any) {
    router.post('/login', formData, {
      onFinish: () => form.resetField('password'),
    });
  }

  return (
    <Layout>
      <div className="my-20 flex flex-col justify-center gap-10 px-2">
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <Logo variant="small" height={40} />
          <h2 className="mt-6 text-center text-xl font-semibold text-zinc-100">
            Sign In
          </h2>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <FormProvider {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
              </FormItem>
              <Button className="w-full">Sign in</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </Layout>
  );
}
