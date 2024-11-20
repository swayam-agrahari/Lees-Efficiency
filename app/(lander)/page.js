import Image from "next/image";
import LandingPage from "../../components/LandingPage";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#1c1c1c] text-black min-h-[300vh]">
      <LandingPage/>
    </div>
  );
}
