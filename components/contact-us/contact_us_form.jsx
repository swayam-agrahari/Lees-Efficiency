export default function ContactUsForm(){
    return(
        <div className="flex justify-center w-full bg-black">
            <div className="bg-white w-[70vw] max-md:w-[95vw] flex flex-col items-center justify-center p-[2vw] max-md:p-[2.5vw] rounded-[.5vw] max-md:rounded-[2vw]">
                <p className="text-[1.5vw] mb-[1vw] max-md:text-[5vw]">CONTACT US</p>
                <form className="text-[1vw] max-md:text-[3vw] flex flex-col w-full gap-y-[1vw] max-md:gap-y-[4vw]">
                    <div className="flex w-full justify-center gap-x-[1vw] tracking-tighter max-md:flex-col max-md:gap-y-[2vw]">
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
    )
}