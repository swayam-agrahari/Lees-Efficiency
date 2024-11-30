import Link from "next/link"

export default function ContactUsForm() {
    return (
        <section className="bg-black body-font relative min-w-[95vw] flex">
            <div className="mx-auto px-[4vw] pt-[4vw] w-full flex-1">
                <p className="text-white text-[4vw] max-md:text-[8vw] mb-[4vw]">Contact Us</p>
                
                <div className="flex sm:flex-nowrap flex-wrap">
                    {/* Map Section */}
                    <div className="lg:w-2/3 md:w-1/2 max-md:w-full max-md:min-h-[60vh] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10  max-md:p-[2vw] flex items-end justify-start relative mb-10 max-md:mb-[5vw] sm:mb-0">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            className="absolute inset-0"
                            frameBorder="0" 
                            title="map" 
                            marginHeight="0" 
                            marginWidth="0" 
                            scrolling="no" 
                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20North%20Bridge%20Road%20%2318-03%20High%20Street%20Centre%20Singapore%20179094&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                            // style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                        />
                        <div className="bg-white relative flex max-md:flex-col flex-wrap py-8 max-md:py-[1vw] rounded-lg shadow-md text-[.8vw] max-md:text-[3.5vw] px-[1vw] gap-x-[1vw]">
                            <div className="flex-1">
                                <h2 className="font-semibold text-black tracking-widest text-[.6vw] max-md:text-[3.5vw]">ADDRESS</h2>
                                <p className="mt-1 text-gray-900">1 North Bridge Road, #18-03,<br/>High Street Centre,<br/>Singapore 179094.</p>
                            </div>
                            <div className="flex-1 mt-4 lg:mt-0">
                                <h2 className="font-semibold text-black tracking-widest text-[.6vw] max-md:text-[3.5vw]">EMAIL</h2>
                                <Link 
                                    href="mailto:leelock@leesenergysolutions.com" 
                                    className="text-black hover:text-gray-700 leading-relaxed cursor-pointer"
                                >
                                    leelock@leesenergysolutions.com
                                </Link>
                                <h2 className="font-semibold text-black tracking-widest text-[.6vw] mt-4 max-md:text-[3.5vw]">PHONE</h2>
                                <Link 
                                    href="tel:+6583166856"
                                    className="text-black hover:text-gray-700 leading-relaxed cursor-pointer"
                                >
                                    +65 83166856
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-white text-black w-[35vw] max-md:w-[95vw] flex flex-col items-center justify-center p-[2vw] max-md:p-[2.5vw] rounded-[.5vw] max-md:rounded-[2vw]">
                        <p className="text-[1.5vw] mb-[1vw] max-md:text-[5vw]">CONTACT US</p>
                        <form className="text-[1vw] max-md:text-[3vw] flex flex-col w-full gap-y-[1vw] max-md:gap-y-[4vw]">
                            <div className="flex w-full justify-center gap-x-[1vw] tracking-tighter max-md:flex-col max-md:gap-y-[2vw] flex-col">
                                <div className="flex-1 flex-col flex gap-y-[.2vw]">
                                    <label htmlFor="name">NAME:</label>
                                    <input type="text" id="name" name="name" className="border border-solid border-black rounded-[.2vw] max-md:rounded-[1vw] w-full min-h-[2vw]" required />
                                </div>
                                
                                <div className="flex-1 flex-col flex gap-y-[.2vw]">
                                    <label htmlFor="email">EMAIL:</label>
                                    <input type="email" id="email" name="email" className="border border-solid border-black rounded-[.2vw] max-md:rounded-[1vw] w-full min-h-[2vw]" required />
                                </div>
                            </div>
                            
                            <div className="flex-1 flex flex-col gap-y-[.2vw]">
                                <label htmlFor="message">MESSAGE:</label>
                                <textarea id="message" name="message" rows="4" className="border border-solid border-black rounded-[.2vw] max-md:rounded-[1vw] w-full" required></textarea>
                            </div>
                            
                            <button type="submit" className="bg-black text-white rounded-full py-[.2vw] max-md:py-[1vw] hover:bg-white hover:text-black transition duration-500 ease-out border border-black border-solid">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}