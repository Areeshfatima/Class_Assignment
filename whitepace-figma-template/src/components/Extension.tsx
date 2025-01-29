import { IoIosArrowRoundForward } from "react-icons/io";

export default function Extension() {
  return (
    <div className="w-full bg-[#043873] text-white py-12 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1200px] mx-auto gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-lg">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Use as Extension
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="w-[180px] h-12 flex items-center justify-center bg-[#4F9CF9] rounded-md hover:bg-[#377dd8] transition-all">
            <span className="pr-2">Let's Go</span>
            <IoIosArrowRoundForward />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full max-w-[600px] h-[200px] md:h-[300px] bg-[#C4DEFD]"></div>
      </div>
    </div>
  );
}
