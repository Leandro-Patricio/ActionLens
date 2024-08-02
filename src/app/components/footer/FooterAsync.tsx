import Image from "next/image";
import Link from "next/link";
import instagram from "../../../../public/footer/icon_instagram.svg";
import whatsapp from "../../../../public/footer/icon_whatsapp.svg";
import youtube from "../../../../public/footer/icon_youtube.svg";
import LogoOnlyImage from "../../../../public/Logos/AL Logo OnlyImage.svg";
import LogoFull from "../../../../public/Logos/AlLogo.svg";
import { linksNames, NavIndividualLinks } from "../header/navLinks";
import { ReactNode } from "react";
import './styles.css'

type FooterAsyncProps = {
    children: ReactNode
}

export default async function FooterAsync({ children }: FooterAsyncProps)
{
    return <footer className="flex flex-col gap-10 pb-10  bg-gradient-to-b from-[#041225] to-black">

        <section className="bg-saqueVolei parallax bg-right sm:bg-center bg-no-repeat sm:h-[30rem] w-full flex justify-center items-center">

            <span className="flex sm:grid grid-cols-2 px-5 sm:pl-10">
                <span className="flex flex-col justify-evenly gap-5 sm:gap-10">


                    {children}


                    <div className="flex flex-col gap-5 justify-center items-center text-xl">
                        <span >Acesse nossas redes sociais</span>
                        <nav className="flex gap-10 justify-center">
                            <Link href={'./'} className="hover:scale-110 transition-all duration-300 hover:shadow-mainYellow hover:shadow-2xl">
                                <Image src={instagram} alt='instagram' className="w-10 h-10" />
                            </Link>
                            <Link href={'./'} className="hover:scale-110 transition-all duration-300 hover:shadow-mainYellow hover:shadow-2xl">
                                <Image src={whatsapp} alt='whatsapp' className="w-10 h-10" />
                            </Link>
                            <Link href={'./'} className="hover:scale-110 transition-all duration-300 hover:shadow-mainYellow hover:shadow-2xl">
                                <Image src={youtube} alt='youtube' className="w-10 h-10" />
                            </Link>
                        </nav>
                    </div>
                </span>
                {/*  imagem volei */}
                <span className=""></span>
            </span>
        </section>

        <section className="flex flex-col sm:flex-row items-center gap-5 w-full h-full justify-evenly">

            <span className="flex items-center">
                <Image src={LogoOnlyImage} alt='LogoActionLens' className="w-20 h-20 hidden sm:flex" />
                <Image src={LogoFull} alt='LogoActionLens' className="w-20 h-20 sm:hidden" />
            </span>

            <span className="flex flex-col gap-2 sm:gap-5 justify-center items-center">
                <span className="text-lg font-semibold">
                    ActionLens Esportes
                </span>
                <span className="text-sm">
                    Momentos úncios. Vídeos imperdíveis
                </span>
                <span className="font-thin text-xs">
                    Copyright 2024. Todos os direitos reservados
                </span>
            </span>
            <nav className="sm:flex flex-col  gap-2 justify-evenly text-lg font-semibold text-mainYellow hidden">
                {linksNames.map(link => 
                {
                    return <NavIndividualLinks goTo={link} key='link' />
                })}
            </nav>
            {/*             <span className="flex flex-col gap-2 text-lg font-semibold text-mainYellow">
                <Link href={'./'} className="hover:scale-105">Vídeos</Link>
                <Link href={'./'} className="hover:scale-105">Sobre nós</Link>
                <Link href={'./'} className="hover:scale-105">Entre em contato</Link>
                <Link href={'./'} className="hover:scale-105">Login</Link>
                <Link href={'./'} className="hover:scale-105">Registre-se</Link>
            </span> */}
        </section>

    </footer>
}
