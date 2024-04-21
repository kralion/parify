import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
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
      authorize: async function (credentials) {
        if (!credentials) {
          return null;
        }

        if (
          credentials.email === "brayan@gmail.com" &&
          credentials.password === "Parify"
        ) {
          return { id: "1", name: "Brayan Paucar", email: "brayan@gmail.com" };
        }

        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
