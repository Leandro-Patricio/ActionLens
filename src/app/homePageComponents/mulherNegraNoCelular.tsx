export async function MulherNegraFutebolComCelular()
{
    return <div className="flex md:grid grid-cols-2 md:grid-cols-4 w-full h-[40rem]
    bg-gradient-to-b   from-black to-[#041225]
     relative text-center justify-center items-center font-bold  ">
        <span className='bg-darkBlue -z-10 absolute w-full h-full'></span>

        <span className={`bg-mulherNegraFutebolComCelularSmall md:bg-mulherNegraFutebolComCelular absolute top-0 left-0 rounded
      w-full h-full bg-center md:bg-contain bg-cover bg-no-repeat 
       shadow-mainYellow drop-shadow-md bg-scroll
     
      `}></span>

        <span className='hidden md:flex md:col-span-2'></span>
        <span className='flex flex-col gap-5 md:col-span-2 p-5 w-fit h-fit z-10
    bg-black bg-opacity-70 md:bg-transparent rounded-3xl'>
            <h2 className="text-6xl flex justify-center text-start h-full items-end text-darkBlue text-stroke-3 ">
                Jogue <br /> Grave <br /> Assista
            </h2>
            <p className=' h-full items-start'>As suas <span className='text-mainYellow underline'>melhores jogadas</span> gravadas <br />
                para você assitir quantas vezes quiser</p>
        </span>
    </div>
}