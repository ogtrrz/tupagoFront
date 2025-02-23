import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

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
          const response = await axios.post(`${process.env.JSONPATH}authenticate`, {
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

  // ✅ Completely disable debug logs
  // debug: false, // 🔹 No internal NextAuth logs

  // // ✅ Suppress error, warning, and debug logs
  // logger: {
  //   error: (code, metadata) => {
  //     if (process.env.NODE_ENV !== "production") {
  //       console.error(code, metadata);
  //     }
  //   },
  //   warn: (code) => {
  //     if (process.env.NODE_ENV !== "production") {
  //       console.warn(code);
  //     }
  //   },
  //   debug: (code, metadata) => {
  //     if (process.env.NODE_ENV !== "production") {
  //       console.debug(code, metadata);
  //     }
  //   },
  // },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
