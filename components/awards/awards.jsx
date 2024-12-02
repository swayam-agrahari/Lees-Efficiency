import Image from "next/image"; 

export default function Awards() {
  return (
    <div id="awards" className="bg-white text-black w-full flex flex-col items-center justify-center py-8">
      <p className="text-[4vw] flex justify-start w-full px-[2.5vw] tracking-tight max-md:text-[10vw] font-medium mb-[2vw] max-md:mb-[5vw]">LEES Awards</p>
      <div className="w-full bg-black h-[1px] mb-[2vw]"></div>
      <div className="min-w-[95vw]">
        <div className="w-full h-full max-w-[95vw] flex flex-wrap justify-center gap-x-[.9vw] max-md:gap-y-[2vw] max-md:mt-[4vw]">
          <div className="relative w-[100%] md:w-[50%] bg-gray-100 shadow-lg overflow-hidden">
            <Image
              src="/assets/ACEEE_Award.png"
              alt="First Image"
              layout="responsive" 
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg"
            />
          </div>
  
          <div className="relative w-[100%] md:w-[49%] bg-gray-100 shadow-lg overflow-hidden">
            <Image
              src="/assets/award2.png"
              alt="Second Image"
              layout="responsive" 
              width={1920} 
              height={1080}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
