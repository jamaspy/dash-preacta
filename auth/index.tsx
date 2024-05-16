// import { compare } from 'bcryptjs';
import type { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { XataAdapter } from "@auth/xata-adapter";
import { XataClient } from "@/xata/client";

export const authOptions: NextAuthOptions = {
  adapter: XataAdapter(XataClient) as Adapter,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: 'Sign in',
    //   credentials: {
    //     email: {
    //       label: 'Email',
    //       type: 'email',
    //       placeholder: 'example@example.com',
    //     },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials.password) {
    //       return null;
    //     }

    //     const user = await xata.db.nextauth_users
    //       .filter({ email: credentials.email })
    //       .getFirst();

    //     if (!user || !(await compare(credentials.password, user.password!))) {
    //       return null;
    //     }
    //     return {
    //       id: user.id,
    //       email: user.email,
    //       name: user.name,
    //       randomKey: 'cooperthedogisapoodleandisgreattothrowaballwith',
    //     };
    //   },
    // }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
