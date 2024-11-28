"use client"
import Image from "next/image";
import data from "../../../components/json/expertise.json"
import { usePathname } from "next/navigation"

export default function ExpertiseView({ params }) {
    const pathname = usePathname();

    console.log(data)
    return (
        <>
            {/* Iterate over the projects and filter based on the pathname */}
            {Object.keys(data).map((key, index) => {
                const project = data[key]; // Access project data by key

                // Check if the current project's 'link' matches the pathname
                if (project.link === pathname) {
                    return (
                        <ExpertisePage key={index} project={project} />
                    );
                }

                return null; // If the link doesn't match, don't render this project
            })}

        </>
    )
}

const ExpertisePage = ({ project }) => {
    return (
        <>
            <div className="bg-black  text-white min-h-screen py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Project Title and Description */}
                    <header className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold ">{project.title}</h1>
                        <p className="text-lg mt-2">{project.dest}</p>
                    </header>

                    {/* Hero Image */}
                    <div className="relative mb-12">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1200}
                            height={600}
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Project Description */}
                    {project.description && (
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold   mb-4">Project Overview</h2>
                            <p className="text-lg  ">{project.description}</p>
                        </section>
                    )}

                    {/* Highlights Section */}
                    {project.highlights && (
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold   mb-4">Key Highlights</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                {project.highlights.map((highlight, index) => (
                                    <li key={index} className="text-lg ">{highlight}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Table Section */}
                    {project.table && (
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold  mb-4">Project Metrics</h2>
                            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                                <table className="min-w-full table-auto border-collapse text-black">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            {project.table[0].map((header, index) => (
                                                <th key={index} className="px-4 py-2 text-left font-medium text-black">{header}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {project.table.slice(1).map((row, index) => (
                                            <tr key={index} className="even:bg-gray-50">
                                                {row.map((cell, idx) => (
                                                    <td key={idx} className="px-4 py-2 text-black">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                    {/* Investments Section */}
                    {project.investments && (
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold text-white mb-4">Investments</h2>
                            <ul className="space-y-2">
                                {Object.entries(project.investments).map(([key, value], index) => (
                                    <li key={index} className="text-lg text-white">
                                        <span className="font-medium capitalize">{key.replace(/_/g, ' ')}:</span> {value}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Other Benefits Section */}
                    {project.other_benefits && (
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold text-white mb-4">Other Benefits</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                {project.other_benefits.map((benefit, index) => (
                                    <li key={index} className="text-lg text-white">{benefit}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Footer Section */}
                    <footer className="text-center mt-16">
                        <p className="text-lg text-white">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </>
    );
};
