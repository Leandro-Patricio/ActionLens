import { linksNames, NavIndividualLinks } from "./navLinks"

export async function LargeNav()
{
    return <nav className="hidden sm:flex flex-1 justify-evenly ">
        {linksNames.map(link => 
        {
            return <NavIndividualLinks goTo={link} key='link' />
        })}
    </nav>
}