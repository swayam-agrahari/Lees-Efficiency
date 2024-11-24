export default function ContactUs(){
    return(
        <div className="flex justify-center w-full">
            <div className="bg-white w-[70vw] flex flex-col items-center justify-center p-[2vw] rounded-[.5vw]">
                <p className="text-[1.5vw] mb-[1vw]">CONTACT US</p>
                <form className="text-[1.2vw] flex flex-col w-full gap-y-[1vw]">
                    <div className="flex w-full justify-center gap-x-[1vw]">
                        <div className="flex-1 flex-col">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" className="border border-solid border-black rounded-[.2vw] w-full" required />
                        </div>
                        
                        <div className="flex-1 flex-col">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" className="border border-solid border-black rounded-[.2vw] w-full" required />
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" placeholder="Your Message" className="border border-solid border-black rounded-[.2vw] w-full" required></textarea>
                    </div>
                    
                    <button type="submit" className="bg-black text-white rounded-full py-[.2vw]">Submit</button>
                </form>
            </div>
        </div>
    )
}