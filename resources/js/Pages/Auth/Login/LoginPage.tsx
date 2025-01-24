import { Button, Input, Label, Layout, Logo } from '@/components';
import FormItem from '@/components/Form/FormItem/FormItem';

export default function LoginPage() {
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
          <form className="space-y-6">
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="text" />
            </FormItem>
            <FormItem>
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" />
            </FormItem>
            <Button className="w-full">Sign in</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
