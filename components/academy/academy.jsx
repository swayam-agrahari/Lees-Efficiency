export default function Academy() {
  return (
    <div className="bg-white text-black w-full flex flex-col items-center px-4 py-8">
      <p className="text-3xl font-normal tracking-tight [@media(max-width:320px)]:text-3xl sm:text-3xl  md:text-7xl    text-black w-full max-w-[90vw] mb-[3vw] mt-[5vw] text-start  ">LEES Academy</p>

      <div className="w-full h-full max-w-[90vw] flex flex-wrap gap-6 justify-center">
        <div className="relative [@media(max-width:320px)]:w-[100%]  w-[100%]  md:w-[48%] [@media(max-width:320px)]:min-h-[20vh] min-h-[30vh] md:h-0 pb-[28%] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/1zfO3HW6xCw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="relative [@media(max-width:320px)]:w-[100%] w-[100%] [@media(max-width:320px)]:min-h-[20vh] min-h-[30vh] md:w-[48%] md:h-0 pb-[28%] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/-I3CACfx5JQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
