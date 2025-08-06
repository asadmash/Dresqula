import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// NextAuth v4 does NOT return handlers. Export GET/POST manually via NextAuth handler.
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) session.user.id = token.sub;
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
};

// Create a NextAuth handler using the options above.
// In the App Router route file, re-export GET/POST from this.
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// Also export a convenience auth() for server components if needed later (noop here for v4).
// Consumers that used `auth()` before should switch to getServerSession(authOptions).
export default handler;
