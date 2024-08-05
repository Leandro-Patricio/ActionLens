import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

export const authConfig = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/users',
        signOut: './',
    },
    callbacks: {
        async session({ session, token, user })
        {
            session.user.id = token.id as string;
            session.user.name = token.name;

            return session;
        },
        async jwt({ token, user, account })
        {
            if (user)
            {
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },

        authorized({ auth, request: { nextUrl } })
        {
            const isLoggedIn = !!auth?.user;
            const isOnUsersPage = nextUrl.pathname.startsWith('/users');
            const { pathname, origin } = nextUrl

            if (isOnUsersPage)
            {
                if (isLoggedIn) return true;
                return /* NextResponse.rewrite(`${origin}/login`) */ NextResponse.redirect(new URL('/login', nextUrl)) // Redireciona não autenticados para login/* false */; // Redirect unauthenticated users to login page
            } else if (isLoggedIn)
            {
                return /* NextResponse.rewrite(`${origin}/users`) */NextResponse.redirect(new URL('/users', nextUrl))/* Response.redirect(new URL('/users', nextUrl)); */

            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;