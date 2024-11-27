'use client'

import Image from "next/image"
import data from "@/components/json/publications.json"
import { useState } from "react"

export default function Publications(){
    const [curr, setCurr]=useState('/');
    const handleHover=(index)=>{
        setCurr(data[index].imgPath)
    }
    const handleClear=()=>{
        setCurr('/');
    }
    return(
        <div className="bg-white text-black min-h-screen flex flex-col items-center pt-[3vw]">
            <div className="text-[4vw] flex justify-start w-full px-[2.5vw] tracking-tight">Publications</div>
            <div className="flex justify-start w-full text-[4vw] px-[2.5vw] -mt-[1.7vw] mb-[2vw] tracking-tighter">Advancing energy efficiency for a waste-free future.</div>
            <div className="border-b-[1px] border-solid border-black w-full"></div>
            <div className="min-w-[100vw] max-w-[100vw] flex flex-col">
                <div className="flex flex-1">
                    <div className="flex-1 flex max-h-[20vw]">
                        <Image src={curr} alt="h" width={1} height={1} className={`${curr=='/'?'hidden':''} m-[1vw] object-cover object-top w-full bg-green-50 shadow-[0_0px_2px_rgba(0,_0,_0,_0.7)]`} unoptimized></Image>
                    </div>
                    <div className="flex flex-[2] flex-col w-full">
                        {data.map((key, index)=>(
                            <div 
                             onMouseEnter={() => handleHover(index)}
                             onMouseLeave={() => handleClear()}
                             key={index} 
                             className="group relative border-b-[1px] border-solid border-black text-[1.4vw] text-black hover:text-white bg-transparent z-10 p-[.7vw] transition-all ease-in-out duration-500">
                                {data[index].title}
                                {/* <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ffc506] transition-all ease-in-out duration-500 group-hover:w-full"></span> */}
                                <span className="absolute left-0 bottom-0 h-0 w-full bg-black transition-all ease-in-out duration-400 z-[-1] group-hover:h-full"></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}