'use client'
import { ReactNode, useEffect, useRef, useState } from "react";
import Hamburguer from "./hamburguer";

type SmallNavProps = {
    children: ReactNode
}

export function SmallNav({ children }: SmallNavProps)
{
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() =>
    {
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
        {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) =>
    {
        if (navRef.current && !navRef.current.contains(event.target as Node))
        {
            setIsOpen(false);
        }
    };

    return (
        <nav className={` fixed top-0 right-0 flex sm:hidden flex-col z-20 `} ref={navRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`z-10 top-10 right-9 absolute`}
            >
                <Hamburguer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <div
                className={` ${isOpen ? "bg-darkYellow bg-opacity-95 -translate-x-32" : "translate-x-20"}
           absolute h-screen w-32 px-5 pt-5 shadow-md shadow-darkYellow/50  transition-all duration-300
           `}
            >
                <span className={`h-full w-full`}>
                    {children}

                </span>
            </div>
        </nav>
    );
}
