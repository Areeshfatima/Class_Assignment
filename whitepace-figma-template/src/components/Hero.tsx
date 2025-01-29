import { IoIosArrowRoundForward } from "react-icons/io";

export default function Hero() {
  return (
    <div className="w-full bg-[#043873] text-[#FFFFFF] flex items-center justify-center py-16 px-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* Text Section */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Get More Done with whitepace
          </h1>
          <p className="text-sm lg:text-base font-normal">
            Project management software that enables your teams to collaborate,
            plan, analyze, and manage everyday tasks.
          </p>
          <button className="w-full lg:w-[200px] h-12 lg:h-16 flex items-center justify-center bg-[#4F9CF9] text-[#FFFFFF] rounded-lg mx-auto lg:mx-0">
            Try whitepace free
            <IoIosArrowRoundForward className="ml-2" />
          </button>
        </div>

        {/* Placeholder Section */}
        <div className="w-full h-[250px] lg:w-[600px] lg:h-[300px] bg-[#C4DEFD] rounded-lg"></div>
      </div>
    </div>
  );
}
