import Link from "next/link"
import CornerArrow from "../svg/corner-arrow"

export default function ExportiseCard({data}){
    return(
        <div className="group min-h-[30vw] flex-1 flex flex-col bg-black pb-[1vw] text-white hover:bg-white hover:text-black transition duration-500 ease-out">
            <div className="bg-white flex-1 mb-[1vw]">Image</div>
            <div className="flex-1 flex flex-col tracking-tighter group-hover:[&>*]:pl-[2vw] [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-out" id="content">
                <p className="transition duration-1000 ease-out text-[1vw] font-light">{data.dest}</p>
                <p className="transition duration-1000 ease-out text-[1.5vw] font-semibold">{data.title}</p>
                <p className="transition duration-1000 ease-out text-[1.2vw] font-normal">{data.person}</p>
                <p className="transition duration-1000 ease-out text-[1vw] mt-[1vw]">400 M² / Pièces 8 / 4 Chambres / magasins / bus / terrace / garage / piscine / lake</p>
                <div className="flex-1 flex items-end">
                    <Link href="/#" className="border-solid border border-white rounded-full min-w-1/2 flex py-[.3vw] px-[1vw]">
                        More information
                        <div className="-rotate-90">
                            <CornerArrow/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}