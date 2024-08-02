export async function PassoAPasso()
{
    return <>
        {/* Para telas menores  */}
        <span className=" xs:hidden">

            <div className="w-full flex flex-col justify-center text-center">
                <h3 className='font-bold text-3xl pb-10'>Veja como é fácil usar o ActionLens</h3>


                <div className="flex flex-col w-full gap-5 items-center text-center align-middle justify-center">

                    <span className='grid grid-cols-7 w-full items-center  gap-2' >
                        <div className='col-start-2 col-span-2 relative w-16 h-16 flex items-center justify-center'>
                            <span className='bg-voleyball absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10'></span>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center align-middle text-2xl font-bold text-mainBlue bg-mainYellow">
                                1
                            </div>
                        </div>
                        <span className="col-span-3 flex flex-col gap-1">
                            <h4 className="text-xl font-semibold text-mainYellow">Passo 1:</h4>
                            <div className="text-lg">Registre-se</div>
                        </span>
                    </span>
                    <span className='flex flex-col gap-2 items-center col-span-3 px-5'>
                        <p className="text-center text-gray-400 col-span-3">Escolha um plano e logue.</p>
                        <p className="text-center text-gray-400 col-span-3">Fácil assim.</p>
                    </span>




                    <span className='grid grid-cols-7 w-full items-center  gap-2' >
                        <div className='col-start-2 col-span-2 relative w-16 h-16 flex items-center justify-center'>
                            <span className='bg-basketball absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10'></span>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center align-middle text-2xl font-bold text-mainBlue bg-mainYellow">
                                2
                            </div>
                        </div>
                        <span className="col-span-3 flex flex-col gap-1">
                            <h4 className="text-xl font-semibold text-mainYellow">Passo 2: </h4>
                            <div className="text-lg">Aperte o botão</div>
                        </span>
                    </span>
                    <span className='flex flex-col gap-2 items-center col-span-3 px-5'>
                        <p className="text-center text-gray-400 col-span-3">Aperte o botão e comece a jogar.</p>
                        <p className="text-center text-gray-400 col-span-3">Suas jogadas serão gravadas automaticamemte.</p>
                    </span>



                    <span className='grid grid-cols-7 w-full items-center  gap-2' >
                        <div className='col-start-2 col-span-2 relative w-16 h-16 flex items-center justify-center'>
                            <span className='bg-tennisball absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10'></span>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center align-middle text-2xl font-bold text-mainBlue bg-mainYellow">
                                3
                            </div>
                        </div>
                        <span className="col-span-3 flex flex-col gap-1">
                            <h4 className="text-xl font-semibold text-mainYellow">Passo 3:</h4>
                            <div className="text-lg">Assita e compartilhe</div>
                        </span>
                    </span>
                    <span className='flex flex-col gap-2 items-center col-span-3 px-5'>
                        <p className="text-center text-gray-400 col-span-3">Pronto! Suas melhores jogadas estão na sua conta.</p>
                        <p className="text-center text-gray-400 col-span-3">Veja, reveja e compartilhe. Tudo no mesmo lugar!</p>
                    </span>




                    {/*       <div className="w-16 h-16">
<img src="/images/sport-image-2.png" alt="Sport Image 2" className="object-cover">
</div> */}
                </div>
            </div>
        </span>

        {/* Para telas maiores  */}
        <span className="hidden xs:block">

            <div className="w-full flex flex-col justify-center text-center">
                <h3 className='font-bold text-3xl pb-10'>Veja como é fácil usar o ActionLens</h3>


                <div className="grid grid-cols-7 w-full gap-5 items-center text-center align-middle justify-center">


                    <span className='col-start-2 col-span-2 flex flex-col items-center '>
                        <div className='relative w-16 h-16 flex items-center justify-center'>
                            <div className='bg-voleyball absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10'></div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center align-middle text-2xl font-bold text-mainBlue bg-mainYellow">
                                1
                            </div>
                        </div>
                        <h4 className="mt-4 text-xl font-semibold">Passo 1:</h4>
                        <div className="text-lg">Registre-se</div>
                    </span>
                    <span className='flex flex-col gap-2 items-center col-span-3'>
                        <p className="text-center text-gray-400 col-span-3">Escolha um plano e logue.</p>
                        <p className="text-center text-gray-400 col-span-3">Fácil assim.</p>
                    </span>


                    <span className='col-start-2 col-span-2 flex flex-col items-center relative'>
                        <div className='relative w-16 h-16 flex items-center justify-center'>
                            <div className='bg-basketball absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10'></div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center align-middle text-2xl font-bold text-mainBlue bg-mainYellow">
                                2
                            </div>
                        </div>
                        <h4 className="mt-4 text-xl font-semibold">Passo 2: </h4>
                        <div className="text-lg">Aperte o botão</div>
                    </span>
                    <span className='flex flex-col gap-2 items-center col-span-3'>
                        <p className="text-center text-gray-400 col-span-3">Aperte o botão e comece a jogar.</p>
                        <p className="text-center text-gray-400 col-span-3">Suas jogadas serão gravadas automaticamemte.</p>
                    </span>


                    <span className='col-start-2 col-span-2 flex flex-col items-center '>
                        <div className='relative w-16 h-16 flex items-center justify-center'>
                            <div className='bg-tennisball absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10'></div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center align-middle text-2xl font-bold text-mainBlue bg-mainYellow">
                                3
                            </div>
                        </div>
                        <h4 className="mt-4 text-xl font-semibold">Passo 3:</h4>
                        <div className="text-lg">Assita e compartilhe</div>
                    </span>
                    <span className='flex flex-col gap-2 items-center col-span-3'>
                        <p className="text-center text-gray-400 col-span-3">Pronto! Suas melhores jogadas na sua conta pra assisitr quantas vezes quiser.</p>
                        <p className="text-center text-gray-400 col-span-3">Veja, reveja e compartilhe. Tudo no mesmo lugar!</p>
                    </span>




                    {/*       <div className="w-16 h-16">
        <img src="/images/sport-image-2.png" alt="Sport Image 2" className="object-cover">
      </div> */}
                </div>
            </div>
        </span>
    </>
} 