'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

type RedirectToHomeProps = {
    username: string
}

export default function RedirectToHome({ username }: RedirectToHomeProps)
{
    const router = useRouter()

    useEffect(() =>
    {
        // Define o estado para redirecionar após 3 segundos
        const redirectTimer = setTimeout(() =>
        {
            router.push('./');

        }, 2000);

        // Limpa o timer quando o componente é desmontado
        return () => clearTimeout(redirectTimer);
    }, []); // A dependência vazia [] garante que useEffect seja executado apenas uma vez


    return <div className="absolute w-screen h-screen bg-slate-900 flex justify-center items-center">
        <div className="w-fit h-fit bg-slate-500 rounded-lg flex flex-col gap-2 justify-center align-middle items-center text-center p-10 m-10">
            <h1 className="pb-10 font-bold text-xl">
                Parabéns {username}!
            </h1>
            <div>
                Você foi registrado com sucesso.
            </div>
            <div>
                Em instantes, você será redirecionado para o página inicial.

            </div>
        </div>

    </div>
}