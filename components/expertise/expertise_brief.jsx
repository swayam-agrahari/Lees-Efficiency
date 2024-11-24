import X from "../svg/x"

export default function ExpertiseBrief({setOpen, brief}){
    return(
        <div className="bg-black min-h-full min-w-[90vw] max-w-[90vw] rounded-t-[2vw] overflow-x-hidden overflow-y-scroll p-[2vw]">
            <div className="w-full flex justify-end">
                <button onClick={()=>{setOpen(false)}} className="text-[#737373]"><X/></button>
            </div>
            <div className="flex gap-x-[2vw]">
                <div className="flex-1 flex flex-col">
                    <div className="bg-white min-h-[25vw] flex-1"></div>
                    <p className="text-white text-[1vw]">{brief?.imagebrief}</p>
                    <div className="flex-1">
                        <table className="min-w-full table-auto border-collapse">
                            {/* <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 text-left">Parameter</th>
                                <th className="py-2 px-4 text-left">Pre-retrofit</th>
                                <th className="py-2 px-4 text-left">Post-retrofit</th>
                                <th className="py-2 px-4 text-left">Improvement</th>
                            </tr>
                            </thead> */}
                            <tbody>
                            {brief?.table?.map((row, index) => (
                                <tr key={index} className="border-t">
                                <td className="py-2 px-4">{row[0]}</td>
                                <td className="py-2 px-4">{row[1]}</td>
                                <td className="py-2 px-4">{row[2]}</td>
                                <td className="py-2 px-4">{row[3]}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex-1 text-[1.2vw]">
                    <p className="mb-[1vw]">{brief?.title}</p>
                    <p className="mb-[1vw]">{brief?.dest}</p>
                </div>
            </div>
            <div className="flex-1 text-[1.2vw] text-white h-full">
                    <p className="mb-[1vw]">{brief?.subtitle}</p>
                    <p className="mb-[1vw]">{brief?.author}</p>
                    <p className="mb-[1vw]">{brief?.description}</p>
                    {brief?.highlights?.map((values, index)=>(
                        <p key={index}>- {values}</p>
                    ))}
                </div>
        </div>
    )
}