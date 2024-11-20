import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full flex items-center justify-between text-xl">

            <div>
                <Image src={"/assets/lee-logo.png"} alt="logo" sizes="true" width={100} height={100} className="mix-blend-multiply"></Image>
            </div>
            <div className="flex  items-center text-center justify-center gap-6">
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