"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import CornerArrow from "../svg/corner-arrow";

export default function ExportiseCard({ data }) {
    const router = useRouter();

    const handleReadMore = () => {
        router.push(data.link); // Use router.push to navigate
    };

    return (
        <div className="group flex flex-col min-h-[30vw] sm:min-h-[40vh] flex-1 bg-black pb-[1vw] text-white md:hover:bg-white md:hover:text-black transition duration-500 ease-out">
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
                <p className="transition duration-1000 ease-out text-base [@media(max-width:320px)]:text-sm sm:text-xl mt-2 font-light">{data.dest}</p>
                <p className="transition duration-1000 ease-out text-2xl [@media(max-width:320px)]:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold group-hover:underline decoration-2">{data.title}</p>
                <p className="transition duration-1000 ease-out text-base [@media(max-width:320px)]:text-sm [@media(max-width:320px)]:mt-[2vh] sm:text-lg mt-[1vw]">
                    {['400 M²', 'Pièces 8', '4 Chambres', 'magasins', 'bus', 'terrace', 'garage', 'piscine', 'lake'].map((item, index) => (
                        <span key={index}>{item} <span className="text-[#737373] ">/</span> </span>
                    ))}
                </p>
                <div className="flex-1 flex items-end my-2" onClick={handleReadMore}>
                    <div
                        className="border-solid border hover:text-white hover:bg-black border-[#737373] md:group-hover:border-black rounded-full min-w-1/2 sm:min-w-[30%] flex py-[.3vw] px-[1vw] transition duration-500 ease-out mt-2 justify-center items-center cursor-pointer"
                    >
                        <p className="text-lg [@media(max-width:320px)]:text-sm sm:text-[1.2vw] py-1 px-1 mr-[.5vw]">More information</p>
                        <p className="-rotate-90 [&>*]:size-[1vw] ">
                            <CornerArrow />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
