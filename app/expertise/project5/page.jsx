import Image from 'next/image';

export default function Project5() {
    return (
        <div className="bg-black text-white min-h-screen py-10 pt-[15vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Project Title and Description */}
                <header className="text-center mb-10">
                    <h1 className="text-6xl max-sm:text-4xl font-extrabold">United World College</h1>
                    <p className="text-xl mt-2">High chiller plant efficiency</p>
                </header>

                {/* Hero Image */}
                <div className="relative mb-12">
                    <Image
                        src="/assets/expertise/5.jpg"
                        alt="Algerian Future Cities Conference"
                        width={1200}
                        height={600}
                        unoptimized
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Project Description */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Project Overview</h2>
                    <p className="text-xl">
                        Energy saving of 42.68%, 30.6% from chiller plants and 33.9% from lighting
                    </p>
                </section>

                {/* Highlights Section */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Key Highlights</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-xl">Saving of more thana S$4mil over 10 years</li>
                        <li className="text-xl">Engaged policymakers in sustainable urbanization discussions.</li>
                        <li className="text-xl">Enhanced public awareness about future city initiatives.</li>
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
