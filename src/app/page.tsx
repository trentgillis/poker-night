import { trpc } from "@/trpc/server";

export default async function Home() {
  const greeting = await trpc.hello.hello({ name: "Trent" });

  return <div>{greeting.hello}</div>;
}
