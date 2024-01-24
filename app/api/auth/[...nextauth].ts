import NextAuth, { NextAuthOptions, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async function (
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<User | null> {
        if (!credentials) {
          return null;
        }

        // Check if the credentials match the hardcoded email and password
        if (
          credentials.email === "jhon@gmail.com" &&
          credentials.password === "password"
        ) {
          // If they match, return a hardcoded user object
          return { id: "1", name: "Jhon", email: "jhon@gmail.com" };
        }

        // If they don't match, return null
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
