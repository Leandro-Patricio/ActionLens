'use client'

import { useActionState, useState } from "react";
import { sendEmail } from "./sendEmail";


export default function FormEmail()
{
    const [response, formAction, isPending] = useActionState(sendEmail, {});

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return <form action={formAction}
        className='flex flex-col gap-5 w-[90%] sm:w-[70%] md:w-[50%] h-fit p-5 sm:p-10 justify-evenly
    backdrop-blur-sm bg-black bg-opacity-90 shadow-yellow-big rounded-lg
' >
        <h1 className='text-center font-bold text-xl'>Nos mande uma mensagem</h1>
        <h2 className='text-center text-sm'>Vamos adorar te responder</h2>

        <label htmlFor="name" className='flex flex-col gap-1'>Qual o seu nome?
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}
                placeholder='João da Silva' className='pl-2 text-black' />
            {response.name && <span className='text-sm text-red-600'>{response.name._errors[0]}</span>}
        </label>

        <label htmlFor="email" className='flex flex-col gap-1'>Seu e-mail
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder='joãodasilva@email.com' className='pl-2 text-black' />
            {response.email && <span className='text-sm text-red-600'>{response.email._errors[0]}</span>}
        </label>

        <label htmlFor="message" className='flex flex-col gap-1'>Digite aqui a sua mensagem
            <textarea name="message" rows={10} cols={10} id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                placeholder='O que você quer nos contar?' className='pl-2 text-black' />
            {response.message && <span className='text-sm text-red-600'>{response.message._errors[0]}</span>}
        </label>

        <div className='flex justify-center'>
            <button type='submit' className='border-2 text-center w-32 p-3 hover:bg-mainYellow hover:text-darkBlue transition-all duration-100 rounded-md'>
                Envie sua mensagem
            </button>
        </div>

    </form>
}

{/* <form onSubmit={async (FormEvent) => await login(FormEvent)}
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
</form> */}