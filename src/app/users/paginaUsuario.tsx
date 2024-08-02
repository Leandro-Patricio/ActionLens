import { auth } from "@/auth";
import Image from "next/image";
import randomUser from '../../../public/users/randomUser.svg'
import LogoutButton from "./components/logoutButton";
import AddNewTimestamp from "./components/addNewTimestamp";


/* type UsersProps = {
    children: ReactNode
} */

export default async function PaginaUsuario(/* { children }: UsersProps */)
{

    const session = await auth()

    return (<main className="w-screen h-screen relative bg-gray-800 flex justify-center align-middle items-center text-slate-100">
        <div className="absolute top-0 left-0 bg-red-500 h-[20vh] w-screen">        </div>

        <LogoutButton />

        <section className="bg-gray-900 w-[80vh] h-[70vh] rounded-lg flex flex-col justify-evenly align-middle items-center relative">
            <Image src={randomUser} alt='image of random user' className="w-32 h-32 absolute -top-14 left-1/2  -translate-x-1/2" />
            <div className="flex flex-col gap-2 m-5">
                <div>Usuário {session?.user?.name}</div>
                <div className="text-xs font-light">{session?.user?.email}</div>

            </div>
            <AddNewTimestamp userId={session?.user?.id as string} />
        </section>



        {/*   {children} */}



        {/*   <Link href={'/login'}>Go back to login</Link> */}
    </main>
    )
}
