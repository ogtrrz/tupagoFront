import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const BACKEND_URL = process.env.JSONPATH || "http://localhost:8080";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(`${BACKEND_URL}authenticate`, {
            username: credentials.username,
            password: credentials.password,
          });

          if (response.data.id_token) {
            return {
              id: credentials.username,
              username: credentials.username,
              accessToken: response.data.id_token, // Store JHipster JWT
            };
          }

          return null;
        } catch (error) {
          console.error("Login failed", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        username: token.username,
      };
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET, // Generate a secure secret key
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
