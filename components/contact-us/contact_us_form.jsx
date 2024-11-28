export default function ContactUsForm() {
    return (
        <section className="bg-black body-font relative font-['Poppins']">
            <div className="container mx-auto px-[4vw] py-[4vw]">
                <h1 className="text-white text-[2.5rem] max-md:text-[8vw] mb-[4vw] font-['Poppins']">Contact Us</h1>
                
                <div className="flex sm:flex-nowrap flex-wrap">
                    {/* Map Section */}
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative mb-10 sm:mb-0">
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
                            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                        />
                        <div className="bg-white relative flex flex-wrap py-8 rounded-lg shadow-md">
                            <div className="lg:w-1/2 px-8">
                                <h2 className="font-semibold text-black tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1 text-gray-900">1 North Bridge Road, #18-03,<br/>High Street Centre,<br/>Singapore 179094.</p>
                            </div>
                            <div className="lg:w-1/2 px-8 mt-4 lg:mt-0">
                                <h2 className="font-semibold text-black tracking-widest text-xs">EMAIL</h2>
                                <a 
                                    href="mailto:leelock@leesenergysolutions.com" 
                                    className="text-black hover:text-gray-700 leading-relaxed cursor-pointer"
                                >
                                    leelock@leesenergysolutions.com
                                </a>
                                <h2 className="font-semibold text-black tracking-widest text-xs mt-4">PHONE</h2>
                                <a 
                                    href="tel:+6583166856"
                                    className="text-black hover:text-gray-700 leading-relaxed cursor-pointer"
                                >
                                    +65 83166856
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full p-8 rounded-lg">
                        <h2 className="text-black text-xl mb-1 font-medium">CONTACT US</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Send us a message and we&apos;ll get back to you as soon as possible.</p>
                        
                        <form className="space-y-6">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-black font-medium">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                    className="w-full bg-white rounded border border-black focus:border-black focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-black font-medium">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required
                                    className="w-full bg-white rounded border border-black focus:border-black focus:ring-2 focus:ring-gray-200 text-base outline-none text-black py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-black font-medium">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required
                                    className="w-full bg-white rounded border border-black focus:border-black focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-black py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full text-white bg-black border-2 border-black py-3 px-6 focus:outline-none hover:bg-white hover:text-black transition-colors duration-300 rounded-full text-lg"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}