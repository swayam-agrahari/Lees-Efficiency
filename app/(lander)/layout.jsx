"use client";

import Navbar from "../../components/navbar/navbar";
import { useEffect, useState, useRef } from "react";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700", "900"]
})

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true);
  const scrollDir = useRef("scrolling down");
  const [hero, setHero] = useState(true);
  const [darkSection, setDarkSection] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const checkDarkSections = () => {
        const aboutUs = document.getElementById('about-us');
        const publications = document.getElementById('publications');
        const academy = document.getElementById('academy');

        const scrollPosition = window.scrollY;
        const navbarPosition = 50;

        // Check for overlap
        const isDark = [aboutUs, publications, academy].some(section => {
            if (!section) return false;
            const rect = section.getBoundingClientRect();
            return rect.top <= navbarPosition && rect.bottom >= navbarPosition;
        });

        setDarkSection(!isDark);
    };

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

        checkDarkSections();

      if (
        scrollY > windowHeight ||
        (window.innerWidth < 680 && scrollY > window.innerWidth)
      ) {
        setHero(false);
      } else {
        setHero(true);
      }

      // Navbar hide/show logic
      if (scrollY < lastScrollY) {
        setOpen(true);
      } else if (scrollY > lastScrollY && scrollY > windowHeight) {
        setOpen(false);
      }

      scrollDir.current =
        scrollY > lastScrollY ? "scrolling down" : "scrolling up";
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollDir();
          checkDarkSections(); // Check on every scroll
        });
        ticking = true;
      }
    };

    // Initial check
    checkDarkSections();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div className={`${poppins.className} w-full bg-transparent`}>

      <Navbar open={open} darkSection={darkSection} hero={true} />
      <div className="w-full">
        {children}
      </div>
      {/* {children} */}
    </div>
  );
}
