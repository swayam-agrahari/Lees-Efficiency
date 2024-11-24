"use client"
import Image from "next/image";
import { TextFade } from "./framer/TextFade";
import { motion } from "framer-motion";

export default function LandingPage() {
    return (
        <div className="min-h-screen relative">
            {/* Background Image */}
            <div className="relative w-full h-screen">
                <Image
                    src="/assets/bg.png"
                    alt="background"
                    height={1100}
                    objectFit="cover"
                    objectPosition="center"
                    className="absolute min-w-screen min-h-screen"
                    unoptimized


                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white gap-12 px-4 sm:px-8 lg:px-16">
                {/* Header Text */}
                <div className="text-center max-w-4xl">
                    <TextFade direction="up" className="space-y-10">
                        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                            LEES EFFICIENCY
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl ">
                            The Cure for the Wasting Disease
                        </p>
                        <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl lg:mt-12 text-gray-300 leading-relaxed" >
                            At LEES Energy Solutions, we offer the cure to the wasting disease of inefficient resource use: maximizing efficiency. We focus on doing more with less by understanding and implementing the right strategies to optimize energy and resources. Our solutions drive sustainable practices, ensuring that every resource is used wisely to reduce waste, cut costs, and protect the environment.
                        </p>
                    </TextFade>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-8">
                    <TextFade direction={"up"}>

                        <motion.button

                            className="relative group border-2 border-[#d2c5b1] text-[#d2c5b1] px-12 py-3 rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
                            whileTap={{ scaleX: 1.5 }}
                        >
                            <span className="absolute inset-0 bg-[#d2c5b1] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                            <span className="relative group-hover:text-black text-lg">About Us</span>
                        </motion.button>
                    </TextFade>

                </div>
            </div>
        </div>
    );
}
