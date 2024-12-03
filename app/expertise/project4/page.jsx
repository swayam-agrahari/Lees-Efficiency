import Image from 'next/image';

export default function Project4() {
    return (
        <div className="bg-black text-white min-h-screen py-10 pt-[15vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Project Title and Subtitle */}
                <header className="text-center mb-10">
                    <h1 className="text-6xl max-sm:text-4xl font-extrabold">Republic Plaza</h1>
                    <p className="text-xl mt-2">
                        Infrastructure Enhancements At Republic Plaza To Result In Energy Savings Of S$870,000 Annually
                    </p>
                    <p className="mt-2 text-lg text-gray-400">By Trane High Performance Buildings, December 27, 2012</p>
                </header>

                {/* Hero Image */}
                <div className="relative mb-12">
                    <Image
                        src="/assets/expertise/4.jpeg"
                        alt="Republic Plaza"
                        width={1200}
                        height={600}
                        unoptimized
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Project Specifications */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Specifications</h2>
                    <p className="text-xl">
                        400 M² / Pièces 8 / 4 Chambres / magasins / bus / terrace / garage / piscine / lake
                    </p>
                </section>

                {/* Project Description */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
                    <p className="text-xl">
                        Infrastructure upgrades at the Republic Plaza Building, one of Singapore&apos;s tallest skyscrapers,
                        have made it one of the most efficient buildings in Singapore. The anticipated energy savings
                        are estimated at four million kilowatt-hours of energy, or an annual savings of S$870,000. This
                        is equivalent to powering 1,300 four-room apartments annually.
                    </p>
                </section>

                {/* Additional Details */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Details</h2>
                    <p className="text-xl">
                        The 66-story, 280-meter-high Republic Plaza is a Grade A office building located at Raffles
                        Place in the heart of Singapore&apos;s Central Business District. Developer and building owner City
                        Developments Limited (CDL) completed the improvements to enhance the building&apos;s energy
                        efficiency and to provide a more comfortable and productive working environment for building
                        tenants. CDL has a strong commitment to sustainability through its property portfolio.
                    </p>
                    <p className="text-xl mt-4">
                        Annual electricity savings from CDL sustainable buildings are estimated at $$19.7 million for
                        the 37 buildings that received Green Mark certification between 2008 and 2011.
                    </p>
                </section>

                {/* High-Performance Buildings */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">High-Performance Buildings</h2>
                    <p className="text-xl">
                        High-performance buildings take a whole-building approach to performance while creating spaces
                        that are reliable, safe, healthy, comfortable, and efficient. Trane, a leading global provider
                        of indoor comfort systems and solutions and a brand of Ingersoll Rand, worked closely with CDL
                        leaders to maximize the efficiency of Republic Plaza.
                    </p>
                    <p className="text-xl mt-4">
                        High-performance buildings meet specific standards for energy and water consumption, system
                        reliability and uptime, environmental compliance, and occupant comfort. All standards are set
                        to deliver established outcomes that help building owners and occupants achieve their business
                        missions.
                    </p>
                </section>

                {/* Footer Section */}
                <footer className="text-center mt-16">
                    <p className="text-xl">© 2024 Lees Energy Solutions, Pte. Ltd. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
