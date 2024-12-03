import Image from 'next/image';

export default function Project1() {
    return (
        <div className="bg-black text-white min-h-screen py-10 pt-[15vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Project Title and Description */}
                <header className="text-center mb-10">
                    <h1 className="text-6xl max-sm:text-4xl font-extrabold">The Galen, HQ of Ascendas</h1>
                    <p className="text-xl mt-2">galen@science park</p>
                </header>

                {/* Hero Image */}
                <div className="relative mb-12">
                    <Image
                        src="/assets/expertise/1.jpg"
                        alt="The Galen, HQ of Ascendas"
                        width={1200}
                        height={600}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                        unoptimized
                    />
                </div>

                {/* Project Description */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
                    <p className="text-xl">GREEN MARK PLATINUM (2010)</p>
                </section>

                {/* Highlights Section */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Key Highlights</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-xl">Chiller plant efficiency of 0.563kW/RT</li>
                        <li className="text-xl">Energy saving of 58%</li>
                        <li className="text-xl">Saving of more than S$16mil over 20 years</li>
                        <li className="text-xl">Payback of 3.2 years</li>
                        <li className="text-xl">CO2 emission reduced by 2,700 metric tonnes per year</li>
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
