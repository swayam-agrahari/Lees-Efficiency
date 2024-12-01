"use client";

import Navbar from "../../components/navbar/navbar";
import { useEffect, useState, useRef } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true);
  const scrollDir = useRef("scrolling down");
  const [hero, setHero] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Update hero visibility based on scroll position
      if (scrollY > windowHeight) {
        setHero(false);
      } else {
        setHero(true);
      }

      // Navbar visibility logic
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
          updateScrollState();
        });
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${poppins.className} w-full bg-transparent`}>
      <Navbar open={open} hero={hero} />
      <div className="w-full">{children}</div>
    </div>
  );
}
