'use client'

import { useState } from "react";
import ExportiseCard from "./expertise_card";
import expertise_data from "../../components/json/expertise.json";
import ExpertiseBrief from "./expertise_brief";

export default function Expertise() {
  const [open, setOpen] = useState(false);
  const [brief, setBrief] = useState({});

  return (
    <div className="bg-black text-black w-full min-h-screen flex flex-col items-center pb-[4vw]">
      <p className="text-[2vw] text-white w-full max-w-[90vw] mb-[3vw] mt-[5vw] flex max-md:text-[13vw] max-md:max-w-[95vw]">Expertise</p>
      <div className="grid max-w-[90vw] grid-cols-3 gap-[2vw] max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-[12vw] max-md:gap-[2.5vw] max-md:max-w-[95vw]">
        {expertise_data.map((data, index) => (
          <ExportiseCard
            key={index}
            data={data}
            setOpen={setOpen}
            open={open}
            setBrief={setBrief}
          />
        ))}
      </div>

      {/* Brief modal popup */}
      <div className={`${open ? '' : 'hidden'} backdrop-blur-lg min-h-screen fixed z-10 top-0 w-full text-white pt-[5vw] flex justify-center`}>
        <ExpertiseBrief setOpen={setOpen} brief={brief} />
      </div>
    </div>
  );
}
