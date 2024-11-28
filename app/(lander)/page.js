"use client"
import Expertise from "../../components/expertise/expertise";
import AboutUs from "../../components/about/about_us.jsx"
import ContactUs from "../../components/contact-us/contact_us";
import Academy from "../../components/academy/academy";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lander from ".";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Parallax speed adjusted here

  return (
    <div ref={ref} className="min-w-full min-h-full bg-black text-black ">
      {/* Parallax background */}
      <motion.div
        className="min-h-[102vh] "
        style={{ y: backgroundY }}
      >
        <Lander />
      </motion.div>
      <div className=" z-20">
        <AboutUs />
      </div>
      <Expertise />
      <Academy />
      <ContactUs />
    </div>
  );
}
