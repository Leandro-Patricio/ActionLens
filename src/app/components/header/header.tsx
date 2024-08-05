import Image from "next/image";
import LogoOnlyImage from '../../../../public/Logos/AL Logo OnlyImage.svg'
import { LargeNav } from "./largeNav";
import { SmallNav } from "./smallNav";
import { linksNames, NavIndividualLinks } from "./navLinks";


export default async function Header()
{


    return <header className="flex w-full justify-between gap-5 p-5 items-center bg-gradient-to-b from-[#041225] to-black z-20">

        <span className="logo flex gap-1 sm:gap-4 pr-16 sm:pr-0">
            <Image src={LogoOnlyImage} alt='ActionLens Logo' className="w-20 h-20" />
            <span className="flex flex-col gap-1 text-center justify-center items-center align-middle text-mainYellow">
                <span className="text-3xl">Action Lens</span>
                <span className="text-xs">Momentos úncios. Vídeos imperdíveis</span>
            </span>
        </span>


        <LargeNav />

        <SmallNav>
            <nav className="flex flex-col gap-4 flex-1 justify-evenly translate-y-20">
                {linksNames.map(link => 
                {
                    return <NavIndividualLinks goTo={link} key='link' />
                })}
            </nav>
        </SmallNav>

    </header>
}
