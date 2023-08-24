import {z} from "zod"
import {
    createTRPCRouter,
    publicProcedure,
  } from "~/server/api/trpc";
  

export const MainBackgroundAndTitleRouter = createTRPCRouter({
    getTitle : publicProcedure.query(({ ctx }) => {
        return ctx.prisma.mainBackgroundAndTitle.findFirst();
      })
})