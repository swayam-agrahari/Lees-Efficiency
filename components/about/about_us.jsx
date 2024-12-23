import Image from "next/image";
import { motion } from "framer-motion";
import Arrow from "../../components/svg/upward-arror";
import { useRouter } from "next/navigation";

export default function AboutUs() {
    const router = useRouter();

    const handleReadMore = () => {
        router.push("/about");
    };

    return (
        <div
            className="w-full h-full bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-900 min-h-full flex items-center py-16 px-6 lg:px-[3vw]"
            id="about-us"
        >
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 2xl:gap-30 mt:[15vw]">
                {/* Left Section: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 lg:space-y-8"
                >
                    <p className="text-[4vw] max-md:text-[13vw] text-black w-full max-w-[90vw] mb-[3vw] text-start">
                        About Us
                    </p>
                    <p className="text-base [@media(max-width:320px)]:text-sm sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
                        LEES Energy Solutions Pte Ltd specializes in state-of-the-art technologies, innovative design, financial analysis, and comprehensive project
                        management for energy-efficient building solutions.
                    </p>
                    <p className="text-base [@media(max-width:320px)]:text-sm sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
                        Guided by an integrated building lifecycle approach, we support sustainable building operations through every phase: energy audits, design, construction, commissioning, measurement and verification, and ongoing operations and maintenance.
                    </p>
                    <p className="text-base [@media(max-width:320px)]:text-sm sm:text-xl lg:text-2xl font-medium text-gray-800">
                        Our Energy Team is led by our founder,{" "}
                        <span className="text-gray-900 font-semibold">
                            Lee Eng Lock, a recognized energy efficiency guru and one of the world’s foremost advocates and innovators in energy conservation, with over 30 years of experience.
                        </span>
                    </p>
                    <motion.button
                        onClick={handleReadMore}
                        className="relative group border border-gray-800 text-gray-800 px-6 py-2 md:px-10 md:py-3 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out flex gap-2 items-center justify-center hover:text-white hover:bg-gray-800"
                        whileTap={{ scaleX: 1.5 }}
                    >
                        <span className="relative group-hover:text-white text-lg">Read More</span>
                        <span className="z-10">
                            <Arrow />
                        </span>
                    </motion.button>
                </motion.div>

                {/* Right Section: Zig-Zag Images */}
                <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 items-center sm:overflow-visible overflow-hidden sm:justify-start justify-center max-md:hidden">
                    {/* Top Image */}
                    <motion.div
                        className="relative w-64 max-h-64 sm:w-full lg:w-80 h-auto rounded-lg overflow-hidden transform sm:rotate-0 lg:rotate-[3deg] lg:translate-x-[25vw] lg:scale-100 lg:translate-y-[1vw]"
                    >
                        <Image
                            alt="Top Image"
                            src="/assets/founders/founder1.jpg"
                            width={250}
                            height={250}
                            className="object-cover"
                            unoptimized
                        />
                    </motion.div>

                    {/* Middle Image (Main Focus) */}
                    <motion.div
                        className="relative w-64 max-h-64 sm:w-full lg:w-80 h-auto rounded-lg overflow-hidden transform sm:rotate-0 lg:scale-125 lg:translate-x-[5vw] 2xl:translate-x-[7vw]"
                    >
                        <Image
                            alt="Middle Image"
                            src="/assets/founders/lees.png"
                            unoptimized
                            width={250}
                            height={250}
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Bottom Image */}
                    <motion.div
                        className="relative w-64 max-h-64 sm:w-full lg:w-80 h-auto rounded-lg overflow-hidden transform sm:rotate-0 lg:rotate-[-3deg] lg:translate-x-[25vw] lg:scale-100 lg:translate-y-[-1vw]"
                    >
                        <Image
                            alt="Bottom Image"
                            src="/assets/founders/founder2.jpg"
                            unoptimized
                            width={250}
                            height={250}
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
