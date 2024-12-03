import Image from 'next/image';

export default function Project6() {
    return (
        <div className="bg-black text-white min-h-screen py-10 pt-[15vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Project Title and Description */}
                <header className="text-center mb-10">
                    <h1 className="text-6xl max-sm:text-4xl font-extrabold">MEWR RETROFIT</h1>
                    <p className="text-xl mt-2">Building Tomorrow&apos;s Smart Grid</p>
                </header>

                {/* Hero Image */}
                <div className="relative mb-12">
                    <Image
                        src="/assets/expertise/6.JPG"
                        alt="South African Future Grid Initiative"
                        width={1200}
                        height={600}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Project Description */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
                    <p className="text-xl">
                        Spearheaded South Africa’s leap towards a sustainable energy future by integrating smart grid technology into existing infrastructure.
                    </p>
                </section>

                {/* Highlights Section */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Key Highlights</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-xl">Developed state-of-the-art smart grid frameworks.</li>
                        <li className="text-xl">Reduced energy inefficiencies across key regions.</li>
                        <li className="text-xl">Facilitated the transition to renewable energy sources.</li>
                    </ul>
                </section>

                {/* Footer Section */}
                <footer className="text-center mt-16">
                    <p className="text-xl">© 2024 Lees Energy Solutions, Pte. Ltd. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
