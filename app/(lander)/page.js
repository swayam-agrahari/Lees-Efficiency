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
  const aboutUsY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // Moves it up

  return (
    <div className="">
      {/* Parallax background */}
      <div ref={ref} className="min-w-full min-h-full bg-black text-black " >
        <motion.div
          className="min-h-[100vh] "
          style={{ y: backgroundY }}
        >
          <Lander />
        </motion.div>
        <div className="">
          {/* Apply motion to AboutUs component */}
          <motion.div
            className="relative min-h-full"
            style={{ y: aboutUsY }}
          >
            <AboutUs />
          </motion.div>

        </div>
      </div>
      <Expertise />
      <Academy />
      <div className="w-full bg-white pt-[3vw] max-md:pb-[3vw]">
        <div className="border-y-[1px] border-solid border-black min-h-[4vw] max-md:min-h-[10vw]"></div>
      </div>
      <Publications />
      <ContactUsForm />
      <div className="w-full px-[5vw] mt-[5vw] mb-[1vw]">
        <div className="border-t-[#737373] border-solid border-t-2 max-w-[90vw]"></div>
      </div>
      <ContactUsFooter />
    </div>
  );
}
