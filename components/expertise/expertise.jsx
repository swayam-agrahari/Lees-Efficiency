import Link from "next/link";
import CornerArrow from "../svg/corner-arrow";
import ExportiseCard from "./expertise_card";
import expertise_data from "@/components/json/expertise.json";

export default function Expertise() {
  return (
    <div className="bg-black text-black w-full min-h-screen flex flex-col items-center">
      <p className="text-[2vw] text-white w-full max-w-[90vw] mb-[3vw] mt-[5vw] flex">Expertise</p>
      <div className="grid max-w-[90vw] grid-cols-4 gap-[2vw]">
        {expertise_data.map((data, index) => (
          <ExportiseCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
