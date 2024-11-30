'use client'

import ExportiseCard from "./expertise_card";
import data from "../../components/json/expertise.json";

export default function Expertise() {
  return (
    <div className="bg-black text-black w-full min-h-screen flex flex-col items-center mb-[5vh] " id="expertise">
      <p className="text-[4vw] text-white w-full max-w-[95vw] mb-[3vw] mt-[5vw] flex max-md:text-[13vw] max-md:max-w-[95vw]">Expertise</p>
      <div className="grid max-w-[95vw] grid-cols-3 gap-[2vw] [2000px]:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-[12vw] max-md:gap-[2.5vw] max-md:max-w-[95vw]">
        {Object.keys(data).map((key, index) => {
          const project = data[key];
          return (
            <ExportiseCard key={index} data={project} />
          );
        })}
      </div>
    </div>
  );
}
