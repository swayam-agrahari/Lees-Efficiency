export default function AboutUs(){
    return(
        <div className="max-h-screen max-w-full relative bg-white">
            <div className="min-h-screen max-w-[100vw] flex gap-x-[1vw]">
                <div className="bg-red-300 flex-1 mt-[7vw]">Image</div>
                <div className="bg-red-300 flex-1 mt-[7vw]">Image</div>
                <div className="bg-red-300 flex-1 mt-[7vw]">Image</div>
            </div>
            <div className="absolute z-10 top-0 w-full h-full flex bg-gradient-to-t from-white to-transparent pb-[7vw]">
                <div className="flex-1 flex flex-col justify-end items-center">
                    <div className="text-center">
                        <p className="text-[2vw] tracking-tight font-semibold -mb-[1vw]">About us</p>
                        <p className="text-[4.5vw] tracking-tight font-semibold">LEE Energy Solutions</p>
                    </div>
                    <div>
                        <p className="text-[1.5vw] max-w-[60vw] text-center">
                            LEES Energy Solutions Pte Ltd specializes in state-of-the-art technologies, innovative design, financial analysis, and comprehensive project 
                            management for energy-efficient building solutions. Guided by an integrated building.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}