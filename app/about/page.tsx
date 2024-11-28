'use client'
import { motion } from "framer-motion";
import { useEffect } from "react";
import aboutData from "../../components/json/about.json";

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0F1012] text-white">
            {/* Hero Section */}
            <section className="py-20 px-6 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold">{aboutData.title}</h1>
                        <div className="w-20 h-1 bg-green-500"></div>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed">
                                {aboutData.content}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 px-6 lg:px-24 bg-[#1A1C20]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold">{aboutData.founder.name} - Founder</h2>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-gray-300">
                                {aboutData.founder.description}
                            </p>
                            <ul className="list-disc pl-6 text-gray-300">
                                {aboutData.founder.research_projects.map((research, index) => (
                                    <li key={index} className="mb-2">{research}</li>
                                ))}
                            </ul>
                            <h3 className="text-2xl font-bold mt-8 mb-4">Notable Projects</h3>
                            {aboutData.founder.notable_projects.map((project, index) => (
                                <div key={index} className="mb-6">
                                    <h4 className="text-xl font-semibold text-green-500">{project.name}</h4>
                                    <p className="text-gray-300">{project.description}</p>
                                </div>
                            ))}
                            <p className="text-gray-300 mt-8">
                                {aboutData.founder.recognition}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-20 px-6 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-16">
                        {aboutData.team_members.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold">{member.name}</h2>
                                <div className="prose prose-lg prose-invert max-w-none">
                                    <p className="text-gray-300">
                                        {member.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 lg:px-24 bg-[#1A1C20]">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold">Get in Touch</h2>
                        <p className="text-gray-300">
                            Interested in learning more about our energy solutions? Contact us today.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
} 