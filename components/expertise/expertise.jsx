'use client'

import { useState } from "react";
import ExportiseCard from "./expertise_card";
import expertise_data from "../../components/json/expertise.json";
import ExpertiseBrief from "./expertise_brief";

export default function Expertise() {
  const [open, setOpen] = useState(false);
  const [brief, setBrief] = useState({});

  return (
    <div className="bg-black text-black w-full min-h-screen flex flex-col items-center mb-[5vh]">
      <p className="text-[4vw] sm:text-[5vw]  text-white w-full max-w-[90vw] mb-[3vw] mt-[5vw] flex justify-center ">Expertise</p>

      {/* Grid Layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2vw] max-w-[90vw]">
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
