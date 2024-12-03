export default function Academy() {
  return (
    <div id="academy" className="bg-white text-black w-full flex flex-col items-center justify-center py-8">
      <p className="text-[4vw] flex justify-start w-full px-[2.5vw] tracking-tight max-md:text-[10vw] font-medium mb-[2vw] max-md:mb-[5vw]">LEES Academy</p>
      {/* <p className="flex justify-start w-full text-[4vw] px-[2.5vw] -mt-[.8vw] mb-[2vw] max-md:mb-[6vw] tracking-tighter max-md:text-[7vw] md:leading-[4.5vw] max-md:leading-[12vw]">Here are some videos for learning some shit lee guy</p> */}
      <div className="w-full bg-black h-[1px] mb-[2vw]"></div>
      <div className="min-w-[95vw]">
        <div className="w-full h-full max-w-[95vw] flex flex-wrap justify-center gap-x-[.9vw] max-md:gap-y-[2vw] max-md:mt-[4vw]">
          <div className="relative [@media(max-width:320px)]:w-[100%] min-h-[30vw] w-[100%] max-md:min-h-[60vw]  md:w-[50%] [@media(max-width:320px)]:min-h-[20vh] md:h-0 pb-[28%] bg-gray-100 shadow-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/1zfO3HW6xCw"
              title="YouTube video player"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="relative [@media(max-width:320px)]:w-[100%] w-[100%] [@media(max-width:320px)]:min-h-[20vh] min-h-[30vw] max-md:min-h-[60vw] md:w-[49%] md:h-0 pb-[28%] bg-gray-100 shadow-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/-I3CACfx5JQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
