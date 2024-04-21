import type { GetServerSidePropsContext } from "next";
import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    nombres: string;
    apellidos: string;
    rol: string;
    foto: string;
  }
  interface Session {
    user: User & DefaultSession["user"];
    token: {
      nombres: string;
      apellidos: string;
      foto: string;
      rol: string;
    };
  }
}
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
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
          return {
            id: "1",
            nombres: "Brayan",
            apellidos: "Parify",
            foto: "https://mighty.tools/mockmind-api/content/human/5.jpg",
            rol: "admin",
            email: "brayan@gmail.com",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          nombres: user.nombres,
          apellidos: user.apellidos,
          foto: user.foto,
          rol: user.rol,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          nombres: token.nombres,
          apellidos: token.apellidos,
          foto: token.foto,
          rol: token.rol,
        },
      };
    },
  },
} satisfies NextAuthOptions;

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
