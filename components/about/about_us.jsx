import Image from "next/image";
import { motion } from "framer-motion";
import Arrow from "../../components/svg/upward-arror";
import { useRouter } from 'next/navigation';

export default function AboutUs() {
    const router = useRouter();

    const handleReadMore = () => {
        router.push('/about');
    };

    return (
        <div
            className="w-full h-full bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-900 min-h-full flex items-center py-16 px-6 lg:px-24 "
            id="about-us"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt:[15vw]">
                {/* Left Section: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 lg:space-y-8"
                >
                    
                    <p className="text-3xl font-medium [@media(max-width:320px)]:text-3xl sm:text-3xl  md:text-7xl    text-black w-full max-w-[90vw] mb-[3vw] mt-[5vw] text-start "> About Us</p>
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                        LEES Energy Solutions Pte Ltd specializes in state-of-the-art technologies, innovative design, financial analysis, and comprehensive project
                        management for energy-efficient building solutions.
                    </p>
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                        Guided by an integrated building lifecycle approach, we support sustainable building operations through every phase: energy audits, design, construction, commissioning, measurement and verification, and ongoing operations and maintenance.
                    </p>
                    <p className="text-lg lg:text-xl font-medium text-gray-800">
                        Our Energy Team is led by our founder,{" "}
                        <span className="text-gray-900 font-semibold">
                            Lee Eng Lock, a recognized energy efficiency guru and one of the world’s foremost advocates and innovators in energy conservation, with over 30 years of experience.
                        </span>
                    </p>
                    <motion.button
                        onClick={handleReadMore}
                        className="relative group border border-gray-800 text-gray-800 [../../media(max-width:320px)]:px-3 [../../media(max-width:320px)]:py-1 px-6 py-2 md:px-10 md:py-3 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out flex gap-2 items-center justify-center hover:text-white hover:bg-gray-800"
                        whileTap={{ scaleX: 1.5 }}
                    >
                        <span className="relative group-hover:text-white text-lg">Read More</span>
                        <span className="z-10"><Arrow /></span>
                    </motion.button>
                </motion.div>

                {/* Right Section: Zig-Zag Images */}
                <div className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 items-center">
                    {/* Top Image */}
                    <motion.div
                        className="relative w-full lg:w-80 h-96 md:h-60 shadow-lg rounded-lg overflow-hidden transform sm:rotate-0 lg:rotate-[3deg] lg:translate-x-[5vw]"
                    >
                        <Image
                            alt="Top Image"
                            src="https://cdn.discordapp.com/attachments/1309870103944499293/1311736430527250534/image.jpg?ex=6749f13f&is=67489fbf&hm=5b5de61045566b8adbbe9a374f1ca7f55d37bb4ce65177c8c8788ec0520b5e85&"
                            fill
                            className="object-center"
                            unoptimized
                        />
                    </motion.div>

                    {/* Middle Image */}
                    <motion.div
                        className="relative w-full lg:w-80 h-96 md:h-60 shadow-lg rounded-lg overflow-hidden transform sm:rotate-0  lg:translate-x-[15vw]"
                    >
                        <Image
                            alt="Middle Image"
                            src="/assets/lees.png"
                            fill
                            className="object-center"
                            unoptimized
                        />
                    </motion.div>

                    {/* Bottom Image */}
                    <motion.div
                        className="relative w-full lg:w-80 h-96 md:h-60 shadow-lg rounded-lg overflow-hidden transform sm:rotate-0 lg:rotate-[-3deg] lg:translate-x-[5vw]"
                    >
                        <Image
                            alt="Bottom Image"
                            src="https://cdn.discordapp.com/attachments/1309870103944499293/1311736974721286144/image.jpg?ex=6749f1c1&is=6748a041&hm=4d23b2913383d092b511ee08d8e7c2bb040289c0b17754fafcf15176c7676628&"
                            fill
                            className="object-center"
                            unoptimized
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
