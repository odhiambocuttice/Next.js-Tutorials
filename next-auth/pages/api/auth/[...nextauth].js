import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// accepts keys that have services that are used to sign in
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
