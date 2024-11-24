'use client'

import Link from "next/link"
import Mail from "../svg/mail"
import MapPin from "../svg/map_pin"
import Phone from "../svg/phone"
import CornerArrow from "../svg/corner-arrow"
import Image from "next/image"

export default function ContactUsFooter(){
    return(
        <div className="text-white bg-black min-h-[20vw] flex flex-col px-[5vw]">
            <div className="min-h-[12vw] flex">
                <div className="flex-1">
                    <p className="text-[2.2vw] tracking-tight -mb-[1vw]">Get in touch</p>
                    <p className="text-[2.2vw] underline text-[#737373]">leelock@leesenergysolutions.com</p>
                </div>
                <Image src={'/assets/lee-logo-no-bg.png'} width={1} height={1} alt="lee" className="h-[7vw] w-auto" unoptimized/>
            </div>
            <div className="w-full flex flex-1">
                <div className="flex-[2] flex flex-col">
                    <p className="flex-1 text-[1.4vw]">The Cure for <br/>the Wasting Disease </p>
                    <div className="flex">
                        <div className="flex group items-end">
                            <button className="size-[7vw] group-hover:text-white text-[#737373] -rotate-[135deg] transition duration-300 ease-out" onClick={()=>{scrollTo(0,0)}}><CornerArrow/></button>
                            <p className="text-[1.5vw] tracking-tighter group-hover:block transition-all duration-300 ease-out group-hover:opacity-100 opacity-0 group-hover:text-white  -ml-[2vw]">Scroll to top</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-[1.2vw] text-[#737373] font-semibold">Quick Links</p>
                    <div className="flex flex-col flex-1 gap-y-[.3vw] text-[1.1vw] font-extralight mr-[2vw]">
                        <p className="flex items-center gap-x-[.4vw] font-[100] hover:bg-white group rounded-full hover:text-black">
                            <span className="h-[.4vw] w-[.4vw] bg-[#737373] group-hover:bg-white rounded-full"></span>
                            <span className="">Home</span>
                        </p>
                        <p className="flex items-center gap-x-[.4vw] hover:bg-white group rounded-full hover:text-black">
                            <span className="h-[.4vw] w-[.4vw] bg-[#737373] group-hover:bg-white rounded-full"></span>
                            About Us
                        </p>
                        <p className="flex items-center gap-x-[.4vw] hover:bg-white group rounded-full hover:text-black">
                            <span className="h-[.4vw] w-[.4vw] bg-[#737373] group-hover:bg-white rounded-full"></span>
                            Expertise
                        </p>
                        <p className="flex items-center gap-x-[.4vw] hover:bg-white group rounded-full hover:text-black">
                            <span className="h-[.4vw] w-[.4vw] bg-[#737373] group-hover:bg-white rounded-full"></span>
                            Lees Academy
                        </p>
                        <p className="flex items-center gap-x-[.4vw] hover:bg-white group rounded-full hover:text-black">
                            <span className="h-[.4vw] w-[.4vw] bg-[#737373] group-hover:bg-white rounded-full"></span>
                            Awards
                        </p>
                        <p className="flex items-center gap-x-[.4vw] hover:bg-white group rounded-full hover:text-black">
                            <span className="h-[.4vw] w-[.4vw] bg-[#737373] group-hover:bg-white rounded-full"></span>
                            Contact Us
                        </p>
                        <p className="flex items-center gap-x-[.4vw] hover:bg-white group rounded-full hover:text-black">
                            <span className="h-[.4vw] w-[.4vw] bg-[#737373] group-hover:bg-white rounded-full"></span>
                            Privacy Policy
                        </p>
                        <p className="flex items-center gap-x-[.4vw] hover:bg-white group rounded-full hover:text-black">
                            <span className="h-[.4vw] w-[.4vw] bg-[#737373] group-hover:bg-white rounded-full"></span>
                            Terms & Privacy
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-[1.2vw] text-[#737373] font-semibold">Contact Information</p>
                    <div className="flex flex-col flex-1 gap-y-[.3vw] text-[1.1vw]">
                        <p>LEES ENERGY SOLUTIONS PTE. LTD.</p>
                        <div className="flex">
                            <div>
                                <p className="flex items-center gap-x-[.4vw]"><MapPin/>1 North Brigade Road, #18-03,</p>
                                <p className="flex gap-x-[.4vw]">
                                    <span className="invisible"><MapPin/></span>
                                    High Street Centre,
                                </p>
                                <p className="flex gap-x-[.4vw]">
                                    <span className="invisible"><MapPin/></span>
                                    Singapore 179094.
                                </p>
                            </div>
                        </div>
                        <p className="flex items-center gap-x-[.4vw]">
                            <Phone/>
                            +65 83166856
                        </p>
                        <p className="flex items-center gap-x-[.4vw]">
                            <Mail/>
                            leelock@leesenergysolutions.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-[1vw] text-[#737373] my-[2vw]">Copyright 2024 Lees Energy Solutions, Pte. Ltd. All Rights Reserved</div>
        </div>
    )
}