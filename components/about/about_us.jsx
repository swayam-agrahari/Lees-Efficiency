import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="max-w-full relative bg-[#eee2d0] " id="about-us">
            <div className="min-h-screen max-w-full flex  flex-col lg:flex-row gap-x-4">
                {/* Left and Right Sections */}
                <div className="bg-red-300 flex-1  ">
                    <p className="text-center text-xl md:text-2xl lg:text-3xl">Image</p>
                </div>


                {/* Center Image Section */}
                <div className="flex-1  flex justify-center">
                    <Image
                        alt="lees"
                        src={"/assets/lees.png"}
                        width={500}
                        height={600}
                        className="w-full h-full object-contain mix-blend-darken"
                        unoptimized
                    />
                </div>

                <div className="bg-red-300 flex-1  ">
                    <p className="text-center text-xl md:text-2xl lg:text-3xl">Image</p>
                </div>
            </div>

            {/* Overlay Section with Gradient */}
            <div className="absolute z-10 top-0 w-full h-full flex flex-col justify-end bg-gradient-to-t from-white to-transparent opacity-80 pb-16 lg:pb-[6vw] px-4 sm:px-8">
                <div className="flex-1 flex flex-col justify-end items-center text-center">
                    <div className="text-center opacity-100 mb-6">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold mb-4">
                            About Us
                        </p>
                        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold">
                            LEE Energy Solutions
                        </p>
                    </div>
                    <div className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
                            LEES Energy Solutions Pte Ltd specializes in state-of-the-art technologies, innovative design, financial analysis, and comprehensive project
                            management for energy-efficient building solutions. Guided by an integrated building approach, we drive sustainability with cutting-edge
                            technologies and solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
