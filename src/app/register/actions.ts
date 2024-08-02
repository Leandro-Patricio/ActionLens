'use server'


import { registerSchema } from "@/lib/zod"
/* import { createClient } from "@supabase/supabase-js"; */
import prisma from "../../../lib/prisma"


/* const supabaseUrl = process.env. SUPABASE_URL;
const supabaseKey = process.env. SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl as string, supabaseKey as string); */


export async function checkUser(username: string)
{
    const checkSameUser = await prisma.user.findFirst({
        where: { name: username }
    })


    if (checkSameUser) return true
    return false
}

export async function checkEmail(email: string)
{
    const checkSameEmail = await prisma.user.findFirst({
        where: { email: email }
    })

    if (checkSameEmail) return true
    return false
}
export async function checkAccountExists(usernameOrEmail: string, password: string)
{
    const checkSameUserEmail = await prisma.user.findFirst({
        where: {
            password: password,
            OR: [
                { email: usernameOrEmail },
                { name: usernameOrEmail }
            ]
        }
    })

    console.log(usernameOrEmail, password, checkSameUserEmail)

    if (checkSameUserEmail) return true
    return false
}

type AddUserProps = {
    username: string,
    password: string
    email: string
}

export async function addNewUser({ username, password, email }: AddUserProps)
{

    try
    {
        const assUser = await prisma.user.create({
            data: {
                name: username,
                password: password,
                email: email,
            }
        })

        return true
    } catch (error) { console.error('Erro ao tentar adicionar um usuário:', error) }

    return false


}

type FormError = {
    username?: { _errors: string[] };
    email?: { _errors: string[] }
    password?: { _errors: string[] }
    newUser?: boolean;
    mensagem?: string
};

export async function registering(currentState: Object, formData: FormData): Promise<FormError>
{
    const data = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
        email: formData.get('email') as string,
    };

    const result = registerSchema.safeParse(data);

    if (!result.success)
    {
        // Formate os erros de validação
        const formattedErrors = result.error.format();
        console.log(formattedErrors)
        return formattedErrors
    }

    /*  await new Promise(resolve => setTimeout(resolve, 10000000)); */

    const userOrEmaiAlreadyExistis = await checkingIfUserOrEmailExists(data.username, data.email)

    if (userOrEmaiAlreadyExistis && (userOrEmaiAlreadyExistis.username || userOrEmaiAlreadyExistis.email)) return userOrEmaiAlreadyExistis


    const newUserAdded = await addNewUser({ username: data.username, password: data.password, email: data.email })

    console.log('newUserAdded', newUserAdded)
    if (newUserAdded)
    {
        return { newUser: true };

    } else
    {
        console.error('Erro ao adicionar novo usuário:');

        return { newUser: false, mensagem: 'Erro ao adicionar um novo usuário. Tente novamente.' };
    }

    return { newUser: false }
}


export const checkingIfUserOrEmailExists = async (username: string, email: string) =>
{

    const userExists = await checkUser(username);
    const emailExists = await checkEmail(email);
    console.log(userExists, emailExists)

    if (userExists && emailExists)
    {
        return {
            username: { _errors: ['Usuário já existe. Tente outro'] },
            email: { _errors: ['Email já existe. Tente outro'] }
        };
    } else if (userExists)
    {
        return {
            username: { _errors: ['Usuário já existe. Tente outro'] }
        };
    } else if (emailExists)
    {
        return {
            email: { _errors: ['Email já existe. Tente outro'] }
        };
    }

    return false

}