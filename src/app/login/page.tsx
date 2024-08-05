'use client'

import { loginSchema } from "@/lib/zod";
import Link from "next/link"
import { useState } from "react"
import { checkAccountExists } from "../register/actions";
import { signIn } from "@/auth";
import { actionSignIn } from "./actions";
import { useRouter } from "next/navigation";
import Header from "../components/header/header";
/* import { login } from "./actions"; */




export default function Login()
{
    const [errors, setErrors] = useState<any>({});
    const router = useRouter()

    const login = async (form: React.FormEvent<HTMLFormElement>) =>
    {
        form.preventDefault()
        const formData = new FormData(form.currentTarget);

        const data = {
            usernameOrEmail: formData.get('usernameOrEmail') as string,
            password: formData.get('password') as string,
        };

        const result = loginSchema.safeParse(data);

        if (!result.success)
        {
            const formattedErrors = result.error.format();
            setErrors(formattedErrors);
            return
        } else { setErrors({}); }

        const accountExists = await checkAccountExists(data.usernameOrEmail, data.password)

        if (!accountExists)
        {
            setErrors((prevErrors: any) => ({
                ...prevErrors,
                accountExists: { _errors: ['Credenciais erradas. Tente novamente'] },
            }));
            return
        }
        try
        {
            await actionSignIn(formData)
            router.push('/users')
        } catch (e) { console.error('signin error: ', e) }

    }


    return <main className="bg-cover bg-manyBalls bg-center bg-no-repeat bg-opacity-50 h-screen w-screen flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
            <form onSubmit={async (FormEvent) => await login(FormEvent)}
                className='flex flex-col gap-5 w-[90%] sm:w-[70%] md:w-[50%] h-fit p-5 sm:p-10 justify-evenly
                    backdrop-blur-sm bg-black bg-opacity-90 shadow-yellow-big rounded-lg
                    '>

                <h1 className='text-center font-bold text-xl'>Login</h1>

                <label htmlFor="usernameOrEmail" className='flex flex-col gap-1'>Usuário ou e-mail
                    <input type="text" name="usernameOrEmail" id="usernameOrEmail" placeholder='João da Silva ou joaodasilva@email.com' className='pl-2 text-black' />
                    {errors.usernameOrEmail && <span className='text-sm text-red-600'>{errors.usernameOrEmail._errors[0]}</span>}
                </label>

                <label htmlFor="password" className='flex flex-col gap-1'>Senha
                    <input type="password" name="password" id="password" placeholder='*****************' className='pl-2 text-black' />
                    {errors.password && <span className='text-sm text-red-600'>{errors.password._errors[0]}</span>}
                </label>

                {errors.accountExists && <p className='text-sm text-red-600'>{errors.accountExists._errors[0]}</p>}
                <div className='flex justify-center'>
                    <button type='submit' className='border-2 text-center w-32 p-3 hover:bg-mainYellow hover:text-darkBlue transition-all duration-100 rounded-md'>
                        Entrar</button>
                </div>

                <Link href={'/register'} className='flex flex-col gap-1 items-center justify-center text-gray-300 hover:text-offWhite' >
                    <span className="font-extralight text-xs">Não possui conta?</span>
                    <span className=''>Registre-se</span>
                </Link>
            </form>
        </div>
    </main>


}