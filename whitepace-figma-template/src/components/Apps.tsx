import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Apps = () => {
  return (
    <div className="w-full bg-[#043873] text-white flex flex-col lg:flex-row items-center justify-center py-12 px-4 lg:py-16 lg:px-12 gap-8 lg:gap-12">
      {/* Image Section */}
      <Image
        src="/Apps.png"
        alt="Screenshot showing app integrations with whitepace"
        width={500}
        height={300}
        className="w-full max-w-[400px] md:max-w-[500px] h-auto px-4 lg:px-0"
      />

      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg space-y-6">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
          Work with Your Favorite Apps Using whitepace
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          Whitepace teams up with your favorite software. Integrate with over
          1000+ apps with Zapier to have all the tools you need for your project
          success.
        </p>
        <button
          aria-label="Read more about app integrations"
          className="w-[180px] h-12 flex items-center justify-center bg-[#4F9CF9] rounded-md hover:bg-[#377dd8] transition-all"
        >
          <span className="pr-2">Read more</span>
          <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default Apps;
