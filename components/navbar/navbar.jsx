'use client'
import Image from "next/image";
import Link from "next/link";
import SideMenu from "@/components/navbar/sidemenu/sidemenu";
import Bars from "../svg/bars-3";
import { useState } from "react";
import { motion } from "framer-motion"

export default function Navbar({ open, hero, darkSection }) {

    const links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Expertise", link: "/services" },
        { name: "Less Academy", link: "/portfolio" },
        { name: "Awards", link: "/contact" },
    ]

    const [openMenu, setOpenMenu] = useState(false);
    const textColor = (hero || darkSection) ? "text-white hover:text-gray-300" : "text-black hover:text-red-500";

    return (
        <>
            <nav className={`min-h-[5vw] z-50 sticky top-0 max-md:min-h-[15vw] backdrop-blur-md ${hero ? "" : "max-md:bg-black"} flex items-center text-[1vw] max-md:text-[5vw] w-full transition-transform ease-in-out duration-300 ${open ? "md:transform translate-y-0" : "md:transform -translate-y-full"}`}>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateX: -50
                    }}
                    animate={{
                        opacity: 100,
                        translateX: 0,
                        transition: { duration: 0.3, delay: 0.1 }
                    }}>

                    <Image
                        src="/assets/lee-logo1.png"
                        width={1}
                        height={1}
                        className="mix-blend-multiply h-[4vw] max-md:h-[15vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[2vw]"
                        alt="Logo"
                        unoptimized
                    />
                </motion.div>
                <div className="md:flex flex-1 justify-center items-center max-md:hidden">
                    {links.map((link, i) => {
                        return (
                            <div
                                key={i}
                            >
                                <motion.div initial={{
                                    opacity: 0,
                                    translateX: -50
                                }}
                                    animate={{
                                        opacity: 100,
                                        translateX: 0,
                                        transition: { duration: 0.3, delay: 0.1 + i * 0.1 }
                                    }}
                                >

                                    <Link
                                        href={link.link}
                                        className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
                <motion.div
                    className="mr-[4vw] max-md:hidden"
                    initial={{
                        opacity: 0,
                        translateX: -50
                    }}
                    animate={{
                        opacity: 100,
                        translateX: 0,
                        transition: { duration: 0.3, delay: 0.4 }
                    }}
                >
                    <motion.button
                        whileTap={{ scaleX: 0.95 }}
                        className="inline-block px-7 py-2 text-md  text-center text-black  transition bg-[#d2c5b1] rounded shadow ripple hover:shadow-lg hover:bg-[#d8c3a3] focus:outline-none"
                    >
                        Contact
                    </motion.button>
                </motion.div>
                <div className="flex justify-end items-center text-5xl px-5 md:hidden max-md:flex-1">
                    <button className="text-[6vw]" onClick={() => { setOpenMenu(true) }}>
                        <Bars />
                    </button>
                </div>
            </nav>
            <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </>
    );
} 