import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const FreeTrial = () => {
  return (
    <div className="w-full h-[700px] bg-[#043873] text-[#FFFFFF] flex items-center justify-center py-8">
      {/* Center Container */}
      <div className="w-[90%] max-w-[1200px] rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center">
        {/* Heading and Paragraph Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Try Whitepace today
          </h1>
          <p className="text-base sm:text-lg mt-4">
            Get started for free. Add your whole team as your needs grow.
          </p>
        </div>

        {/* Button, Paragraph, and Logos Section */}
        <div className="flex flex-col items-center">
          {/* Button */}
          <button className="px-6 py-3 bg-[#4F9CF9] text-[#FFFFFF] flex items-center justify-center rounded-lg transition mb-4 text-base sm:text-lg">
            Try Taskey free <IoIosArrowForward />
          </button>

          {/* Paragraph */}
          <p className="font-normal text-center mb-6 text-sm sm:text-base">
            On a big team? Contact sales
          </p>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <Image
              src="/Group2.png"
              alt="Logo 1"
              width={100}
              height={100}
              className="w-[80px] sm:w-[100px] h-auto object-contain"
            />
            <Image
              src="/window.png"
              alt="Logo 2"
              width={100}
              height={100}
              className="w-[80px] sm:w-[100px] h-auto object-contain"
            />
            <Image
              src="/Group.png"
              alt="Logo 3"
              width={100}
              height={100}
              className="w-[80px] sm:w-[100px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
