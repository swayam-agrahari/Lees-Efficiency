'use client'
import { motion } from "framer-motion";
import { useEffect } from "react";
import aboutData from "../../components/json/about.json";

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-900 border">
            {/* Hero Section */}
            <section className="py-20 px-6 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">{aboutData.title}</h1>
                        <div className="w-20 h-1 bg-gray-800"></div>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                {aboutData.content}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 px-6 lg:px-24 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{aboutData.founder.name} - Founder</h2>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-gray-700">
                                {aboutData.founder.description}
                            </p>
                            <ul className="list-disc pl-6 text-gray-700">
                                {aboutData.founder.research_projects.map((research, index) => (
                                    <li key={index} className="mb-2">{research}</li>
                                ))}
                            </ul>
                            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Notable Projects</h3>
                            {aboutData.founder.notable_projects.map((project, index) => (
                                <div key={index} className="mb-6">
                                    <h4 className="text-xl font-semibold text-gray-800">{project.name}</h4>
                                    <p className="text-gray-700">{project.description}</p>
                                </div>
                            ))}
                            <p className="text-gray-700 mt-8">
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
                                <h2 className="text-3xl font-bold text-gray-900">{member.name}</h2>
                                <div className="prose prose-lg prose-invert max-w-none">
                                    <p className="text-gray-700">
                                        {member.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 lg:px-24 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-gray-700">
                            Interested in learning more about our energy solutions? Contact us today.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
