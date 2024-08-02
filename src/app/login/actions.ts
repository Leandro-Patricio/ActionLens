'use server'

import { signIn } from "@/auth";
import { loginSchema } from "@/lib/zod";


export async function login(formData: FormData)
{
    const data = {
        usernameOrEmail: formData.get('usernameOrEmail') as string,
        password: formData.get('password') as string,
    };

    const result = loginSchema.safeParse(data);
    if (!result.success)
    {
        // Formate os erros de validação
        const formattedErrors = result.error.format();
        console.log(formattedErrors)
    } else
    {
        /*    try
           { */
        await signIn("credentials", formData);

        /* signInSucces ?? redirect('/users') */

        // Handle successful login redirection or other actions
        /* } catch (error)
        {
            console.error("Login error:", error);
            // Handle error display or other actions
        } */
    }
}


export const actionSignIn = async (formData: FormData) =>
{
    const userSigned = await signIn("credentials", formData);
    /*     if (userSigned) return true
        return false */
}