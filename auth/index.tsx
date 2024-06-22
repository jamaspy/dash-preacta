// // import { compare } from 'bcryptjs';

import type { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { XataAdapter } from "@auth/xata-adapter";
import { XataClient } from "@/xata/client";

import NextAuth from "next-auth";
import SignInEmail from "@/components/complex/auth/email/signin";
import { resend } from "./resend";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: XataAdapter(XataClient) as Adapter,
  providers: [
    Resend({
      from: "no-reply@disi.au",
      sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const emailVerificationLink = new URL(url);
        emailVerificationLink.searchParams.set(
          "callbackUrl",
          `${baseUrl}/dashboards`
        );
        const newLink = emailVerificationLink.href;
        resend.emails.send({
          from: from,
          to: [email],
          subject:
            "This is your secure link to sign in to Preacta Talent Intelligence",
          react: SignInEmail({
            url: newLink,
          }),
        });
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/newuser",
    verifyRequest: "/auth/checkemail",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative URLs to be used
      if (url.startsWith("/")) {
        return `${baseUrl}/dashboards`;
      }
      // Allows external URLs
      else if (new URL(url).origin === baseUrl) {
        return `${baseUrl}/dashboards`;
      }
      return baseUrl;
    },
  },
});
