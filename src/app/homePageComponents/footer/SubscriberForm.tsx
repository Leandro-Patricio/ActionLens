'use client'

import { useActionState, useEffect, useState } from "react";
import { subscribing } from "./action";
import { ToastSucess } from "../../components/Toasts/Toastify";
import { ToastContainer } from "react-toastify";

export default function SubscriberForm()
{
    const [response, formAction, isPending] = useActionState(subscribing, {});
    const [subscribe, setSubscribe] = useState("");

    useEffect(() =>
    {
        if (response.stats === true)
        {
            console.log('deu certo')
            setSubscribe("")
            ToastSucess('E-mail adicionado!')
        }

    }, [response])


    return <form action={formAction} className="flex flex-col gap-10 justify-evenly items-center">
        <label htmlFor="subscribe" className="text-3xl font-semibold text-center">Receba as nossa notícias</label>
        <span className="flex justify-end h-10 w-full sm:w-[28rem] relative">
            <input type="email" name="subscribe" placeholder="joanadasilva@email.com"
                className="w-full placeholder:text-gray-700 bg-darkBlue text-offWhite placeholder:pl-5 pl-5 rounded-full"
                value={subscribe}
                onChange={(e) => setSubscribe(e.target.value)}
            />

            <button type="submit"
                className="w-28 h-full absolute right-0 whitespace-nowrap transition-all duration-300
         bg-mainYellow hover:bg-ligthYellow
         hover:font-semibold text-darkBlue
         shadow-md shadow-mainYellow rounded-full
     px-5 py-3 flex items-center justify-center z-10 ">
                Inscreva-se
            </button>
        </span>
        {response.subscribe && <span className='text-sm text-red-600'>{response.subscribe._errors[0]}</span>}
        <ToastContainer />
    </form>
}