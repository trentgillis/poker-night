import { Button, Layout, Logo } from '@/components';

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
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="color-zinc-100 text-sm">Email</label>
              <input
                className="color-zinc-100 flex h-10 w-full rounded-md border border-zinc-400/50 bg-zinc-950 px-3 py-2 ring-offset-zinc-950 focus-visible:border-zinc-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
                type="text"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="color-zinc-100 text-sm">Password</label>
              <input
                className="color-zinc-100 flex h-10 w-full rounded-md border border-zinc-400/50 bg-zinc-950 px-3 py-2 ring-offset-zinc-950 focus-visible:border-zinc-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
                type="password"
              />
            </div>
            <Button className="w-full">Sign in</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
