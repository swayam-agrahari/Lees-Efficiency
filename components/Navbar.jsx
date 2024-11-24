import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full flex items-center justify-between text-xl p-4  h-full bg-[#fff6ec] text-black">

            <div className="mix-blend-multiply">
                <Image src={"/assets/lee-logo.png"} alt="logo" sizes="true" width={100} height={100} className="mix-blend-multiply"></Image>
            </div>
            <div className="flex  items-center text-center justify-center gap-12">
                <div>Home</div>
                <div>About Us</div>
                <div>Expertise</div>
                <div>Less Academy</div>
                <div>Awards</div>
            </div>

            <div>
                contact
            </div>
        </div>
    )
}