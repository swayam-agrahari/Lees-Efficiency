"use client"
import Image from "next/image";
import { TextFade } from "../../components/framer/TextFade";
import { motion } from "framer-motion";
import Arrow from "../../components/svg/upward-arror";

export default function Lander() {
    const scrollToAboutUs = () => {
        const aboutUsSection = document.getElementById("about-us");
        aboutUsSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-w-screen  relative overflow-x-hidden">
            <motion.div
                className="min-w-full min-h-[102vh]"
                style={{
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }}
                transition={{ ease: "linear", duration: 1.5 }}
            >
                <Image
                    src="/assets/bgresize.png"
                    alt="background"
                    fill
                    className="min-w-screen min-h-[102vh] scale-x-[-1]"
                    unoptimized
                ></Image>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>

            {/* Content */}
            <div className=" absolute inset-0 flex flex-col justify-center items-start text-white gap-12 px-4 sm:px-8 lg:px-16">
                <div className="text-start max-w-4xl " >
                    <TextFade direction="up" className="space-y-4 ">
                        <p className="text-6xl  [@media(max-width:320px)]:text-5xl  md:text-8xl lg:text-9xl font-bold">
                            LEES EFFICIENCY
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300">
                            The Cure for the Wasting Disease
                        </p>
                        {/* <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl lg:mt-12 text-gray-300 leading-relaxed">
                            At LEES Energy Solutions, we offer the cure to the wasting disease of inefficient resource use: maximizing efficiency. We focus on doing more with less by understanding and implementing the right strategies to optimize energy and resources. Our solutions drive sustainable practices, ensuring that every resource is used wisely to reduce waste, cut costs, and protect the environment.
                        </p> */}
                    </TextFade>
                </div>

                {/* Buttons */}
                <div className="flex  justify-start items-center sm:gap-8" >
                    <TextFade direction={"up"} className="flex  justify-start items-center gap-4 sm:gap-8 ">
                        <div onClick={scrollToAboutUs}>
                            <motion.button
                                className="relative group border  border-[#d2c5b1] bg-[#d2c5b1]  text-black   px-6 py-2  [@media(max-width:320px)]:px-3  [@media(max-width:320px)]:py-2  md:px-10 md:py-3   rounded-3xl  transition-all duration-300 ease-in-out flex gap-2 items-center justify-center hover:text-[#d2c5b1] hover:bg-transparent"
                                whileTap={{ scaleX: 1.5 }}
                            >
                                <span className="relative group-hover:text-[#d2c5b1] [@media(max-width:320px)]:text-base text-lg ">About Us</span>
                                <span className="z-10"><Arrow /></span>
                            </motion.button>
                        </div>
                        <div onClick={scrollToAboutUs}>
                            <motion.button
                                className="relative group border  border-[#d2c5b1] text-[#d2c5b1] [@media(max-width:320px)]:px-3  [@media(max-width:320px)]:py-1  px-6 py-2 md:px-10 md:py-3 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out flex gap-2 items-center justify-center hover:text-black hover:bg-[#d2c5b1]  "
                                whileTap={{ scaleX: 1.5 }}
                            >
                                <span className="relative group-hover:text-black text-lg">Contact Us</span>
                                <span className="z-10"><Arrow /></span>
                            </motion.button>
                        </div>
                    </TextFade>
                </div>
            </div>
        </div>
    );
}