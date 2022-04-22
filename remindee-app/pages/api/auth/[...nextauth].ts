import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Remindee Account",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const url = process.env.NEXTAUTH_URL;

        const user = await axios.post(
          `${url}/api/authentication/login`,
          credentials
        );

        if (user) {
          return user.data.data;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (user && user.id) {
        const newSessions = {
          ...session,
          user: {
            ...session.user,
            id: user.id,
          },
        };
        return newSessions;
      } else {
        const url = process.env.NEXTAUTH_URL;
        const user = await axios.get(
          `${url}/api/profile/${session.user?.email}`
        );
        const newSessions = {
          ...session,
          user: {
            ...session.user,
            id: user.data.data.id,
          },
        };
        return newSessions;
      }
    },
  },
  secret: process.env.SECRET,
});
