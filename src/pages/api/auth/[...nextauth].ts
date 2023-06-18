import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import prisma from "@/src/app/libs/prismadb"; 
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
 

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please type correct password and email");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user?.hashedPasword) {
          throw new Error("Error login details");
        }
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPasword
        );
        if(!isCorrectPassword){
          throw new Error("Password is not valid")
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/logout",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
