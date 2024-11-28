import Link from "next/link"
import CornerArrow from "../svg/corner-arrow"
import { useState } from "react"
import Image from "next/image";

export default function ExportiseCard({data, open, setOpen, setBrief}){
    return(
        <div className="group min-h-[37vw] max-lg:min-h-[48.5vw] max-sm:min-h-[115vw] flex-1 flex flex-col bg-black pb-[1vw] text-white hover:bg-white hover:text-black transition duration-500 ease-out">
            <div className="rounded-sm overflow-hidden">
                <Image
                    src={data.image}
                    width={300}
                    height={300}
                    className="w-full h-[20vw] max-md:h-[60vw] max-lg:h-[35vw] max-sm:h-[70vw] object-cover"
                    alt="Logo"
                    unoptimized
                />
            </div>
            <div className="flex-[3] flex flex-col tracking-tighter max-md:group-hover:[&>*]:pl-[5vw] group-hover:[&>*]:pl-[1vw] [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-out pt-[1vw]" id="content">
                <p className="transition duration-1000 ease-out text-[1.2vw] max-md:text-[3vw] max-sm:text-[4vw] font-light">{data.dest}</p>
                <p className="transition duration-1000 ease-out text-[2vw] max-md:text-[4vw] max-sm:text-[6vw] font-semibold group-hover:underline decoration-2">{data.title}</p>
                <p className="transition duration-1000 ease-out text-[1.2vw] max-md:text-[3.5vw] max-sm:text-[4vw] font-normal">{data.person}</p>
                <p className="transition duration-1000 ease-out text-[1.1vw] max-md:text-[3vw] max-sm:text-[3vw] lg:mt-[1vw]">
                    {['400 M²','Pièces 8','4 Chambres','magasins','bus','terrace','garage','piscine','lake'].map((data, index)=>(
                        <span key={index}>{data} <span className="text-[#737373]">/</span> </span>
                    ))}
                </p>
                <div className="flex-1 flex items-end">
                    <button 
                      onClick={()=>{
                        setBrief(data);
                        setOpen(true);
                      }}
                      className="border-solid border hover:text-white hover:bg-black border-[#737373] group-hover:border-black rounded-full min-w-1/2 flex py-[.3vw] px-[1vw] max-md:px-[3vw] max-md:py-[1.4vw] max-sm:px-[3vw] max-sm:py-[1.5vw] transition duration-500 ease-out">
                        <p className="text-[1.2vw] max-sm:text-[3.5vw] max-md:text-[3vw] mr-[.5vw]">More information</p>
                        <p className="-rotate-90 [&>*]:size-[1.2vw] flex justify-center items-center max-md:[&>*]:size-[3vw] max-sm:[&>*]:size-[5vw]">
                            <CornerArrow/>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}