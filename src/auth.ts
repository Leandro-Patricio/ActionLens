import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "../lib/prisma";
import { signInSchema } from "./lib/zod";
import { authConfig } from "./auth.config";
import { createClient } from "./app/utils/supabase/server";

export const { handlers, signIn, signOut, auth, handlers: { GET, POST } } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                usernameOrEmail: { label: 'Username or Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials)
            {
                try
                {
                    const { usernameOrEmail, password } = await signInSchema.parseAsync(credentials);

                    const user = await prisma.user.findFirst({
                        where: {
                            password: password,
                            OR: [
                                { name: usernameOrEmail },
                                { email: usernameOrEmail }
                            ]

                        }
                    });


                    /* const supabase = createClient();



                    const { data: user } = await supabase
                        .from('users')
                        .select('*')
                        .or(`name.eq.${usernameOrEmail},email.eq.${usernameOrEmail}`)
                        .eq('password', password)
                        .single(); */




                    if (!user) return null; // User not found

                    return { name: user.name, id: user.id, email: user.email };
                } catch (error)
                {
                    console.error('Authentication error:', JSON.stringify(error, null, 2));
                    /*  console.error('Authentication error:', error); */
                    return null; // Return null on error
                }
            },
        }),
    ],
});

export async function logout()
{
    console.log('logout')
    await signOut();
}