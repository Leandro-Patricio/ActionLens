'use client'

import { useActionState, useState } from "react";
import { sendEmail } from "./sendEmail";


export default function FormEmail()
{
    const [response, formAction, isPending] = useActionState(sendEmail, {});
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return <form action={formAction} className="flex flex-col " >
        Nome<input className="text-darkBlue" type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
        {response.name && <span className='text-sm text-red-600'>{response.name._errors[0]}</span>}

        Mensagem<input className="text-darkBlue" type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
        {response.message && <span className='text-sm text-red-600'>{response.message._errors[0]}</span>}

        Email<input className="text-darkBlue" type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        {response.email && <span className='text-sm text-red-600'>{response.email._errors[0]}</span>}

        <button type="submit" >send</button>
    </form>
}