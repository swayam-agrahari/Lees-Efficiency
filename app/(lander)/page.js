import Image from "next/image";
import LandingPage from "../../components/LandingPage";
import AboutUs from "@/components/about/about_us.jsx"

export default function Home() {
  return (
    <div className="w-full h-full bg-[#1c1c1c] text-black min-h-[300vh]">
      {/* <LandingPage/> */}
      <AboutUs/>
    </div>
  );
}
