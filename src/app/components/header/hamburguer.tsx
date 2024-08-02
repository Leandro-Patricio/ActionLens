"use client";

import { Dispatch, SetStateAction } from "react";

type HamburguerProps = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>

}

export default function Hamburguer({ isOpen, setIsOpen }: HamburguerProps)
{

    return <button
        className="relative group top-0 "
        onClick={() => setIsOpen(!isOpen)}
    >
        <div
            className={`relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ${isOpen && "ring-4 "
                } ring-opacity-30 duration-200 shadow-md`}
        >
            <div
                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
            >
                <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen && "translate-x-10"
                        }`}
                ></div>
                <div
                    className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen && "translate-x-10"
                        } delay-75`}
                ></div>
                <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen && "translate-x-10"
                        } delay-150`}
                ></div>

                <div
                    className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${isOpen && "translate-x-0"
                        } flex w-0 ${isOpen && "w-12"}`}
                >
                    <div
                        className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isOpen && "rotate-45"
                            }`}
                    ></div>
                    <div
                        className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${isOpen && "-rotate-45"
                            }`}
                    ></div>
                </div>
            </div>
        </div>
    </button>

}