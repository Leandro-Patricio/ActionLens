import Link from "next/link"

export async function InsideGrayPhoto()
{
    return <div className={`flex flex-col gap-5 w-full h-[27rem] text-center justify-center items-center align-middle`}>
        <h1 className="text-6xl font-bold">Veja as melhores <br />jogadas</h1>
        <p>Suas melhores jogadas gravadas para você assitir <span className='text-darkYellow underline'> e compartilhar</span> quantas vezes quiser</p>
        <NavLinksOnGrayPhoto />

    </div>
}


export async function BackPhotoGray() 
{
    return <>
        <span className={`-translate-y-2 sm:translate-y-0 bg-pingPongMale absolute top-[8rem] sm:top-0 left-0 w-full h-[30rem] sm:h-[40rem] bg-center bg-no-repeat bg-cover -z-10 blur-[1px] grayscale`}></span>
        <span className={`-translate-y-2 sm:translate-y-0 absolute top-[8rem] sm:top-0 left-0 w-full h-[30rem] sm:h-[40rem] bg-black opacity-70 -z-10`}></span>
    </>
}

const NavLinksOnGrayPhoto = () =>
{
    const botoes = [{ nome: 'Comece agora!', link: './login' },
    { nome: 'Saiba mais', link: './' }]

    return <nav className='flex gap-10 items-center justify-center '>
        {botoes.map((botao) =>
        {
            return <Link href={botao.link} key={botao.nome}
                className=' transition-all duration-200
          rounded-full hover:bg-ligthYellow bg-mainYellow 
          shadow hover:shadow-md  shadow-mainYellow p-2 text-darkBlue font-bold'>
                {botao.nome}</Link>
        })}


    </nav>
}