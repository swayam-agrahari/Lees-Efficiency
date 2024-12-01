import { TextFade } from "@/components/framer/TextFade";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function SideMenu({ openMenu, setOpenMenu }) {
    useEffect(() => {
        if (openMenu) {
            // Prevent scrolling on the body
            document.body.style.overflow = "hidden";
        } else {
            // Restore body scrolling
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = ""; // Ensure cleanup
        };
    }, [openMenu]);

    return (
        <>
            <div
                className={`fixed z-[1000] bg-[rgba(20,20,20,0.5)] backdrop-blur-sm w-full h-screen left-0 top-0 flex justify-end ${openMenu ? "" : "hidden"
                    }`}
            >
                <div className="bg-[#d2c5b1] w-full h-full p-4 rounded-l-[2vw] overflow-hidden text-gray-800">
                    <button
                        className="w-[12vw] h-auto font-bold cursor-pointer"
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className=""
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <TextFade>
                        <div className="flex flex-col flex-1 justify-center items-start text-[6vw]">
                            <Link href="/" onClick={() => { setOpenMenu(!openMenu) }} className="mx-[1vw] my-[1.5vw] mt-[4vw]">
                                Home
                            </Link>
                            <Link href={`/#about-us`} onClick={() => { setOpenMenu(!openMenu) }} className="mx-[1vw] my-[1.5vw] mt-[4vw]">
                                About Us
                            </Link>
                            <Link href="/#expertise" onClick={() => { setOpenMenu(!openMenu) }} className="mx-[1vw] my-[1.5vw] mt-[4vw]">
                                Expertise
                            </Link>
                            <Link href="/awards" onClick={() => { setOpenMenu(!openMenu) }} className="mx-[1vw] my-[1.5vw] mt-[4vw]">
                                Awards
                            </Link>
                            <Link
                                href="/#academy"
                                onClick={() => { setOpenMenu(!openMenu) }}
                                className="mx-[1vw] my-[1.5vw] mt-[4vw]"
                            >
                                Less Academy
                            </Link>
                        </div>
                    </TextFade>
                    <ul className="absolute bottom-0 mb-[4vh]">
                        <li>
                            <Image
                                src="/assets/lee-logo-no-bg.png"
                                width={50}
                                height={50}
                                alt="hello"
                                className="mix-blend-multiply h-[8vh] max-md:pl-[2vw] w-auto mb-[4vh]"
                            ></Image>
                        </li>
                    </ul>

                </div >
            </div >
        </>
    );
}
