import Link from "next/link"
import CornerArrow from "../svg/corner-arrow"
import { useState } from "react"
import Image from "next/image";

export default function ExportiseCard({ data, open, setOpen, setBrief }) {
    return (
        <div className="group flex flex-col min-h-[30vw] sm:min-h-[40vh] flex-1 bg-black pb-[1vw] text-white hover:bg-white hover:text-black transition duration-500 ease-out">
            <div className="rounded-sm overflow-hidden">
                <Image
                    src={data.image}
                    width={300}
                    height={300}
                    className="w-full h-[40vh] sm:h-[35vh] object-cover"
                    alt="Logo"
                    unoptimized
                />
            </div>

            <div className="flex-1 flex flex-col tracking-tighter group-hover:[&>*]:pl-[1vw] [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-out mt-4" id="content">
                <p className="transition duration-1000 ease-out text-lg sm:text-xl mt-2 font-light">{data.dest}</p>
                <p className="transition duration-1000 ease-out text-[1.5vw] sm:text-[2vw] font-semibold group-hover:underline decoration-2">{data.title}</p>
                <p className="transition duration-1000 ease-out text-[1.2vw] sm:text-[1.8vw] font-normal">{data.person}</p>
                <p className="transition duration-1000 ease-out text-[vw] sm:text-[1vw] mt-[1vw]">
                    {['400 M²', 'Pièces 8', '4 Chambres', 'magasins', 'bus', 'terrace', 'garage', 'piscine', 'lake'].map((data, index) => (
                        <span key={index}>{data} <span className="text-[#737373] ">/</span> </span>
                    ))}
                </p>
                <div className="flex-1 flex items-end mt-2">
                    <button
                        onClick={() => {
                            setBrief(data);
                            setOpen(true);
                        }}
                        className="border-solid border hover:text-white hover:bg-black border-[#737373] group-hover:border-black rounded-full min-w-1/2 sm:min-w-[30%] flex py-[.3vw] px-[1vw] transition duration-500 ease-out mt-2  justify-center items-center">
                        <p className="text-[1vw] sm:text-[1.2vw] mr-[.5vw]">More information</p>
                        <p className="-rotate-90 [&>*]:size-[1vw] ">
                            <CornerArrow />
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}