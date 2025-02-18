'use client'

import { addNewTime } from "../actions"

type FormLoginProps = {
    userId: string
}

export default function AddNewTimestamp({ userId }: Readonly<FormLoginProps>)
{

    /* const [error, action, isPending] = useActionState(addNewTime, null) */

    return <div className="bg-gray-500 ring-8 ring-gray-500 w-32 h-32 rounded-full"><button
        type="button"
        onClick={async () => addNewTime(userId)}
        className="p-10 flex justify-center items-center align-middle w-32 h-32 rounded-full
    transition-all duration-100
     bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600ho hover:to-red-800
     
      text-white font-bold  
     active:translate-y-[4px] shadow-black shadow-2xl active:shadow-xl
    ">
        Clique <br />para gravar
    </button>
    </div>
    {/* <form action={addNewTime}>
        <div className="bg-gray-500 ring-8 ring-gray-500 w-32 h-32 rounded-full">
            <input
                name="userId"
                id="userId"
                value={userId}
                type="text"
                className="hidden"
            /> */}

    {/*             {pending && <p>Carregando...</p>}
            {error && <p className=" text-red-500 text-sm">{error}</p>} */}
    /*         </div>
    
    
    
        </form> */
}