'use client'

import { useActionState, useState } from 'react';
import { registering } from './actions';
import RedirectToHome from './redirectToHome';
import Link from 'next/link';
import SpinnerLoader from '../../../public/SpinnerLoader';

type FormError = {
    username?: { _errors: string[] };
    email?: { _errors: string[] };
    password?: { _errors: string[] };
    noError?: string;
    mensagem?: string;
};

type FormActionResponse = FormError | false;

export default function Register()
{

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [response, formAction, isPending] = useActionState(registering, {});


    /* const handleSubmit = async (e: FormEvent) =>
    
    {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

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
            return setErrors(formattedErrors)
            
        }


        const userOrEmaiAlreadyExistis = await checkingIfUserOrEmailExists(data.username, data.email)

        if (userOrEmaiAlreadyExistis.username || userOrEmaiAlreadyExistis.email) return setErrors(userOrEmaiAlreadyExistis)

        const resp = await formAction(formData)

        console.log('response.newUser0', resp)

        if (response.newUser)
        
        {
            console.log('response.newUser1', response)
            setErrors({ noError: 'newUserAdded' })
            
            
        } else setErrors({ mensagem: 'Erro ao adicionar um novo usuário. Tente novamente.' })
        
        
        
        
    } */


    return (
        <div className="relative flex h-screen w-screen items-center justify-center text-gray-300">
            <form /* onSubmit={handleSubmit} */ action={formAction} className='flex flex-col w-[80%] h-[60%] p-5 bg-slate-800 rounded-lg justify-between'>
                <h1 className='text-center font-bold text-xl'>Registre-se</h1>

                <label htmlFor="username" className='flex flex-col gap-1'>Usuário
                    <input type="text" name="username" id="username" placeholder='João da Silva' className='pl-2 text-black'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    {response.username && <span className='text-sm text-red-600'>{response.username._errors[0]}</span>}
                </label>

                <label htmlFor="email" className='flex flex-col gap-1'>E-mail
                    <input type="email" name="email" id="email" placeholder='jaodasilva@email.com' className='pl-2 text-black'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    {response.email && <span className='text-sm text-red-600'>{response.email._errors[0]}</span>}
                </label>


                <label htmlFor="password" className='flex flex-col gap-1'>Senha
                    <input type="password" name="password" id="password" placeholder='*****************' className='pl-2 text-black'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    {response.password && <span className='text-sm text-red-600'>{response.password._errors[0]}</span>}
                </label>

                <div className='flex justify-center text-ceter'>
                    <button type='submit'
                        disabled={isPending}
                        className={`border-2 text-center w-40 px-6 hover:bg-slate-600 hover:text-white
                             disabled:text-gray-500 disabled:border-slate-900 disabled:cursor-not-allowed disabled:hover:bg-slate-700`}
                    >{!isPending ? 'Registrar' :
                        <span className='flex gap-2 align-middle items-center'>
                            <SpinnerLoader />  Processando
                        </span>

                        }
                    </button>
                </div>
                {/*      {response.errors.newUser === false && <span className='text-sm text-red-600'>{response.errors.mensagem}</span>} */}
                {/* {JSON.stringify(response)} */}


                <div className='flex justify-center text-ceter'>
                    <Link href={'/login'} className='hover:text-white'>Voltar para Login</Link>
                </div>

            </form>

            {response.newUser && <RedirectToHome username={username} />}
        </div>
    );
}
