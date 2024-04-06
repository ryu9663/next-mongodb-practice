import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_AUTH_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_AUTH_SECRETS || "",
    }),
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRETS || "",
};
export default NextAuth(authOptions);
