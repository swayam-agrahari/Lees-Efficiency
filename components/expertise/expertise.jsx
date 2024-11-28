'use client'


import ExportiseCard from "./expertise_card";
import data from "../../components/json/expertise.json";

export default function Expertise() {

  return (
    <div className="bg-black text-black w-full min-h-screen flex flex-col items-center mb-[5vh]">
      <p className="text-3xl font-medium [@media(max-width:320px)]:text-3xl sm:text-3xl  md:text-5xl   text-white w-full max-w-[90vw] mb-[3vw] mt-[5vw] text-start ">Expertise</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2vw] max-w-[90vw]">
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
