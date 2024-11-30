'use client'

import Image from "next/image"
import data from "../../components/json/publications.json"
import { useState } from "react"
import Link from "next/link"
import CornerArrow from "../svg/corner-arrow"

export default function Publications() {
    const [curr, setCurr] = useState('/');
    const handleHover = (index) => {
        setCurr(data[index].imgPath)
    }
    const handleClear = () => {
        setCurr('/');
    }
    return (
        <div id="publications" className="bg-white text-black 2xl:min-h-screen flex flex-col items-center py-[3vw]">
            <div className="text-[4vw] flex justify-start w-full px-[2.5vw] tracking-tight max-md:text-[10vw] font-medium">Publications</div>
            <div className="flex justify-start w-full text-[4vw] px-[2.5vw] -mt-[1.7vw] mb-[2vw] max-md:mb-[6vw] tracking-tighter  max-md:text-[7vw] max-md:leading-[12vw] max-sm:leading-[10vw]">Advancing energy efficiency for a waste-free future.</div>
            <div className="border-b-[1px] border-solid border-black w-full"></div>
            <div className="min-w-full max-w-[100vw] flex flex-col">
                <div className="flex flex-1">
                    <div className="flex-1 flex max-h-[20vw] max-md:hidden">
                        <Image src={curr} alt="h" width={1} height={1} className={`${curr == '/' ? 'hidden' : ''} m-[1vw] object-cover object-top flex-1 bg-green-50 shadow-[0_0px_2px_rgba(0,_0,_0,_0.7)]`} unoptimized></Image>
                    </div>
                    <div className="flex flex-[2] flex-col w-full">
                        {data.map((key, index) => (
                            <Link
                                href={data[index].filePath}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleClear()}
                                key={index}
                                className="group flex relative gap-x-[.5vw] border-b-[1px] border-solid border-black text-[1.4vw] max-md:text-[5vw] text-black hover:text-white bg-transparent z-10 p-[.7vw] max-md:p-[2.1vw] transition-all ease-in-out duration-500">
                                <p className="size-[1.5vw] max-md:min-w-[7vw] max-md:size-[6vw] mt-[.3vw] max-md:mt-[1vw] -rotate-90 [&:not(:hover)]:hidden group-hover:block"><CornerArrow /></p>
                                <p className="max-md:hover:ml-[3vw]">{data[index].title}</p>
                                {/* <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ffc506] transition-all ease-in-out duration-500 group-hover:w-full"></span> */}
                                <span className="absolute left-0 bottom-0 h-0 w-full bg-black transition-all ease-in-out duration-400 z-[-1] group-hover:h-full"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}