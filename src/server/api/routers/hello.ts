import { z } from "zod";

import { createTRPCRouter, publicProdecure } from "@/server/api/trpc";

export const helloRouter = createTRPCRouter({
  hello: publicProdecure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { hello: `Hello ${input.name}` };
    }),
});
