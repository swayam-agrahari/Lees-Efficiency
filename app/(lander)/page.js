"use client"
import Expertise from "../../components/expertise/expertise";
import AboutUs from "../../components/about/about_us.jsx"
import Academy from "../../components/academy/academy";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lander from ".";
import ContactUsForm from "../../components/contact-us/contact_us_form";
import ContactUsFooter from "../../components/contact-us/contact_us_footer";
import Publications from "../../components/publications/publications";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Parallax speed adjusted here
  const aboutUsY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Moves it up

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
        {/* Apply motion to AboutUs component */}
        <motion.div
          style={{ y: aboutUsY }}
        >
          <AboutUs />
        </motion.div>
      </div>
      <Publications />
      <Expertise />
      <Academy />
      <ContactUsForm />
      <div className="w-full px-[5vw] mt-[5vw] mb-[1vw]">
        <div className="border-t-[#737373] border-solid border-t-2 max-w-[90vw]"></div>
      </div>
      <ContactUsFooter />
    </div>
  );
}
