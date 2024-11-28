export default function Academy() {
  return (
    <div className="bg-white text-black w-full flex flex-col items-center">
    
      <p className="text-[2.2vw] text-black w-full max-w-[90vw] mb-[3vw] mt-[4vw] flex">
        Lees Academy
      </p>

      <div className="w-full max-w-[90vw] flex gap-5 justify-center md:gap-[1vw] pb-[1vw]">

        <div className="group bg-black w-[28vw] h-[14vw] flex flex-col justify-between mb-10 rounded-2xl relative transition-all duration-300">
          <div className="absolute top-2 right-2 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-[2vw] h-[2vw] text-white transform -rotate-45"
            >
              <path d="M12 2l10 10-10 10-2-2 6-6H2V10h14L10 4z" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-full transition-all duration-300">
            <p className="text-white text-[1.5vw] font-bold">Publication</p>
          </div>
        </div>

        <div className="w-[28vw] h-[14vw] bg-gray-200 flex items-center justify-center rounded-2xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1zfO3HW6xCw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-[28vw] h-[14vw] bg-gray-200 flex items-center justify-center rounded-2xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
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
