import { AuthOptions } from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials: {
              email: { label: "email", type: "text" },
              password: { label: "password", type: "password" },
            }
        )
    ],
    pages: {
        signIn: '/',
        signOut: '/logout'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions)