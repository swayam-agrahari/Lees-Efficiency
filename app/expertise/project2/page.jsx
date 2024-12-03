import Image from 'next/image';

export default function Project2() {
    return (
        <div className="bg-black text-white min-h-screen py-10 pt-[15vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Project Title and Subtitle */}
                <header className="text-center mb-10">
                    <h1 className="text-6xl max-sm:text-4xl font-extrabold">Grand Hyatt In Singapore</h1>
                    <p className="text-xl mt-2">Located in Singapore</p>
                </header>

                {/* Hero Image */}
                <div className="relative mb-12">
                    <Image
                        src="/assets/expertise/2.webp"
                        alt="Grand Hyatt In Singapore"
                        width={1200}
                        height={600}
                        unoptimized
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Project Highlights */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Highlights</h2>
                    <ul className="list-disc list-inside text-xl space-y-2">
                        <li>System efficiency better than 0.58kw/ton</li>
                        <li>Guaranteed savings of $1,000,000 pa</li>
                        <li>Achieved savings of over $1,000,000 pa</li>
                        <li>Energy savings of 45%</li>
                        <li>Water saving of $50,000 pa</li>
                        <li>Return on investment of 42%</li>
                        <li>Payback period of 2 years and 5 months</li>
                    </ul>
                </section>

                {/* Investment Details */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Investment Details</h2>
                    <p className="text-xl">
                        The project included supply, install, consultancy, and management of air-conditioning equipment valued at $3,200,000. Taking Singapore tax incentives into consideration, the net investment reduced to S$2,400,000. Energy savings achieved close to $1,000,000 per annum.
                    </p>
                    <ul className="mt-4 space-y-2 text-xl">
                        <li><strong>Total Investment:</strong> S$3,200,000</li>
                        <li><strong>Net Investment (After Tax Incentives):</strong> S$2,400,000</li>
                        <li><strong>Energy Savings Achieved:</strong> S$1,000,000 pa</li>
                        <li><strong>Payback Period:</strong> 2 years and 5 months</li>
                        <li><strong>Return on Investment:</strong> 42%</li>
                    </ul>
                </section>

                {/* Performance Table */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Performance Improvements</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-white border-collapse border border-gray-600">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="border border-gray-600 px-4 py-2">Parameter</th>
                                    <th className="border border-gray-600 px-4 py-2">Pre-retrofit</th>
                                    <th className="border border-gray-600 px-4 py-2">Post-retrofit</th>
                                    <th className="border border-gray-600 px-4 py-2">Improvement</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-600 px-4 py-2">Chiller Efficiency</td>
                                    <td className="border border-gray-600 px-4 py-2">0.75</td>
                                    <td className="border border-gray-600 px-4 py-2">0.485</td>
                                    <td className="border border-gray-600 px-4 py-2">35.33%</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-600 px-4 py-2">Cooling Tower Efficiency</td>
                                    <td className="border border-gray-600 px-4 py-2">0.03</td>
                                    <td className="border border-gray-600 px-4 py-2">0.025</td>
                                    <td className="border border-gray-600 px-4 py-2">16.67%</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-600 px-4 py-2">Chilled Water Pump Efficiency</td>
                                    <td className="border border-gray-600 px-4 py-2">0.153</td>
                                    <td className="border border-gray-600 px-4 py-2">0.035</td>
                                    <td className="border border-gray-600 px-4 py-2">77.12%</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-600 px-4 py-2">Condenser Water Pump Efficiency</td>
                                    <td className="border border-gray-600 px-4 py-2">0.116</td>
                                    <td className="border border-gray-600 px-4 py-2">0.035</td>
                                    <td className="border border-gray-600 px-4 py-2">69.83%</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-600 px-4 py-2">System Efficiency</td>
                                    <td className="border border-gray-600 px-4 py-2">1.049</td>
                                    <td className="border border-gray-600 px-4 py-2">0.58</td>
                                    <td className="border border-gray-600 px-4 py-2">44.71%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Other Benefits */}
                <section className="mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Other Benefits</h2>
                    <ul className="list-disc list-inside text-xl space-y-2">
                        <li>Improved comfort</li>
                        <li>Healthier indoor air</li>
                        <li>Less CO2 emission</li>
                        <li>Less breakdown of machines</li>
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
