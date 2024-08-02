'use client'

import Image from "next/image"
import logout from '../../../../public/users/logout.svg'
import { deslogar } from "../actions"

export default function LogoutButton()
{
    return <form action={deslogar}>

        <button
            type="submit"
            /*  onClick={() => deslogar()} */
            className="absolute top-5 right-5 flex flex-col items-center justify-center text-black
        hover:ring-4  ring-black ring-offset-4  ring-offset-red-500 hover:scale-110 rounded-3xl hover:text-white
        transition-all duration-500 text-sm
        ">
            <Image src={logout} alt='logout' className="w-10 h-10" />
            Deslogar

        </button >
    </form>
}