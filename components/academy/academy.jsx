export default function Academy() {
  return (
    <div className="bg-white text-black w-full flex flex-col items-center">
    
      <p className="text-[2vw] text-black w-full max-w-[90vw] mb-[3vw] mt-[4vw] flex">
        Lees Academy
      </p>

      <div className="w-full max-w-[90vw] flex flex-row gap-5 justify-center md:gap-[5vw] pb-[1vw]">

        <div className="group bg-black w-[25vw] h-[12.5vw] flex flex-col justify-between mb-10 rounded-lg relative transition-all duration-300">
          <div className="absolute top-2 right-2 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white transform -rotate-45"
            >
              <path d="M12 2l10 10-10 10-2-2 6-6H2V10h14L10 4z" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-full transition-all duration-300">
            <p className="text-white text-xl font-bold">Publication</p>
          </div>
        </div>

        <div className="w-[25vw] h-[12.5vw] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-[25vw] h-[12.5vw] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
