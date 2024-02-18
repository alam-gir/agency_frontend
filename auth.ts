import NextAuth, { Account, Session, User } from "next-auth";
import "next-auth";
import Credential from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

declare module "next-auth" {
  interface User {
    phone: string;
    avatar: string;
    role: string;
    access_token: string;
    refresh_token: string;
  }
  interface Session {
    user: User;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [

    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, user }) {
      // if provider
      if (account?.provider === "github" || account?.provider === "google") {
        // get token from server
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login/provider`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              account: account,
              user: user,
            }),
          }
        );

        if (!response.ok) return false;

        const resData = await response.json();
        user.access_token = resData.access_token;
        user.refresh_token = resData.refresh_token;

        // update the account access_token
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/provider/${account.providerAccountId}/update?access_token=${account.access_token}`
        );

        return true;
      }

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
});
