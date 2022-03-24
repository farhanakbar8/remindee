import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  //   pages: {
  //     signIn: "/auth/login",
  //   },
  callbacks: {
    session: async ({ session, user }) => {
      const newSessions = {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
      return newSessions;
    },
  },
  secret: process.env.SECRET,
});
