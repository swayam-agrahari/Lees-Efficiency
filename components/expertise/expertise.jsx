import Link from "next/link"
import CornerArrow from "../svg/corner-arrow"

export default function Expertise(){
    return(
        <div className="bg-white text-black w-full min-h-screen flex justify-center">
            <div className="max-w-[90vw] flex flex-col flex-1">
                <div className="flex flex-1 gap-x-[1vw]">
                    <div className="min-h-[30vw] flex-1 flex flex-col bg-black pb-[1vw]">
                        <div className="bg-white flex-1 mb-[1vw]">Image</div>
                        <div className="text-white flex-1 flex flex-col tracking-tighter">
                            <p className="text-[1vw] font-light">TOP</p>
                            <p className="text-[1.5vw] font-semibold">THE GALEN, HQ OF ASCENDAS</p>
                            <p className="text-[1.2vw] font-normal">Bruce Lee</p>
                            <p className="text-[1vw] mt-[1vw]">400 M² / Pièces 8 / 4 Chambres / magasins / bus / terrace / garage / piscine / lake</p>
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
                    <div className="min-h-[20vw] flex-1 bg-red-200">g</div>
                    <div className="min-h-[20vw] flex-1 bg-red-200">g</div>
                </div>
                <div className="flex flex-1">
                    <div className="min-h-[20vw] flex-1 bg-red-200">g</div>
                    <div className="min-h-[20vw] flex-1 bg-red-200">g</div>
                    <div className="min-h-[20vw] flex-1 bg-red-200">g</div>
                </div>
            </div>
        </div>
    )
}