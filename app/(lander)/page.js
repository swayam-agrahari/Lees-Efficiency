"use client"
import LandingPage from "../../components/LandingPage";
import Expertise from "@/components/expertise/expertise";
import AboutUs from "@/components/about/about_us.jsx"
import ContactUs from "@/components/contact-us/contact_us";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Parallax speed adjusted here

  return (
    <div ref={ref} className="min-w-full min-h-full bg-[#1c1c1c] text-black  relative">
      {/* Parallax background */}
      <motion.div
        className="min-h-screen  pb-10"
        style={{ y: backgroundY }}
      >
        <LandingPage />
      </motion.div>

      <div className=" z-20">
        <AboutUs />
      </div>
      <Expertise />
      <Academy/>
      <ContactUs />
    </div>
  );
}
