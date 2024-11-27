import Image from "next/image";
import LandingPage from "../../components/LandingPage";
import Expertise from "@/components/expertise/expertise";
import ContactUsForm from "@/components/contact-us/contact_us_form";
import ContactUsFooter from "@/components/contact-us/contact_us_footer";
import Publications from "@/components/publications/publications";

export default function Home() {
  return (
    <div className="w-full h-full text-black min-h-[300vh] flex flex-col bg-black">
      {/* <LandingPage/> */}
      <Publications/>
      <Expertise/>
      <div className="w-full px-[5vw] my-[5vw]">
        <div className="border-t-[#737373] border-solid border-t-2 max-w-[90vw]"></div>
      </div>
      <ContactUsForm/>
      <div className="w-full px-[5vw] mt-[5vw] mb-[1vw]">
        <div className="border-t-[#737373] border-solid border-t-2 max-w-[90vw]"></div>
      </div>
      <ContactUsFooter/>
    </div>
  );
}
