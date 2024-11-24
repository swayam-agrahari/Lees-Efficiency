import LandingPage from "../../components/LandingPage";
import Expertise from "@/components/expertise/expertise";
import AboutUs from "@/components/about/about_us.jsx"
import ContactUs from "@/components/contact-us/contact_us";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#1c1c1c] text-black min-h-[300vh]">
      <LandingPage/>
      <AboutUs/>
      {/* <LandingPage/> */}
      <Expertise/>
      <ContactUs/>
    </div>
  );
}
