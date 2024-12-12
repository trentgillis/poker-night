import { cache } from "react";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const createTRPCContext = cache(async () => {
  return {};
});

const t = initTRPC.context().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;

export const publicProdecure = t.procedure;
