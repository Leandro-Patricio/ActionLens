'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// ...

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
)
{
    try
    {
        await signIn('credentials', formData);
    } catch (error)
    {
        console.log({ error });
        if (error instanceof Error)
        {
            const { type, cause } = error as AuthError;
            switch (type)
            {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                case "CallbackRouteError":
                    return cause?.err?.toString();
                default:
                    return "Something went wrong.";
            }
        }

        throw error;
    }
}