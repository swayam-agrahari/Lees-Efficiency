import Image from "next/image";

export default function Awards() {
  return (
    <div id="awards" className="bg-white text-black w-full flex flex-col items-center justify-center py-8">
      <p className="text-[4vw] flex justify-start w-full px-[2.5vw] tracking-tight max-md:text-[10vw] font-medium mb-[2vw] max-md:mb-[5vw]">
        LEES Awards
      </p>
      <div className="w-full bg-black h-[1px] mb-[2vw]"></div>
      <div className="min-w-[95vw]">
        <div className="w-full h-full max-w-[95vw] flex flex-wrap justify-between gap-4">

          {/* Image 1 with Hover Overlay */}
          <div className="relative w-[100%] md:w-[48%] bg-gray-100 shadow-lg overflow-hidden group">
            <Image
              src="/assets/ACEEE_Award.png"
              alt="First Image"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg md:pt-[9vw]"
              unoptimized
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold text-center px-4">
                American Council for Energy Efficient Economy (AEEE)
              </p>
            </div>
          </div>

          {/* Image 2 with Hover Overlay */}
          <div className="relative w-[100%] md:w-[48%] bg-gray-100 shadow-lg overflow-hidden group">
            <Image
              src="/assets/award2.png"
              alt="Second Image"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg"
              unoptimized
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold text-center px-4">
                BCA-Green Building Individual Awards
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
