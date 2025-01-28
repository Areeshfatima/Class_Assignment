import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Test = () => {
  return (
    <div className="w-full h-[990px] bg-[#FFFFFF] text-[#212529] flex flex-col items-center justify-center py-16">
      {/* Heading Section */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">What Our Clients Say</h1>
      </div>

      {/* Cards Section */}
      <div className="w-full px-4 sm:px-10 flex flex-col sm:flex-row justify-center gap-8">
        {/* Card 1 */}
        <div className="w-full sm:w-[470px] h-auto bg-[#FFFFFF] shadow-lg rounded-2xl p-6 flex flex-col justify-between mb-8 sm:mb-0">
          {/* Icon and Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#043873]">
              <FaQuoteLeft />
            </h2>
            <p className="text-base sm:text-lg text-[#212529] font-normal">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          {/* Profile Section */}
          <div className="flex items-center border-t border-gray-300 pt-4">
            <div className="w-16 h-16">
              <Image
                src="/Avater.png"
                alt="Girl profile"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <h1 className="font-semibold text-[#212529] text-sm sm:text-base">
                Oberon Shaw, MCH
              </h1>
              <p className="font-normal text-xs sm:text-sm text-[#6C757D]">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[470px] h-auto bg-[#4F9CF9] shadow-lg rounded-2xl p-6 flex flex-col justify-between mb-8 sm:mb-0">
          {/* Icon and Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#FFFFFF]">
              <FaQuoteLeft />
            </h2>
            <p className="text-base sm:text-lg text-[#FFFFFF] font-normal">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          {/* Profile Section */}
          <div className="flex items-center border-t border-blue-300 pt-4">
            <div className="w-16 h-16">
              <Image
                src="/Avater2.png"
                alt="Profile"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <h1 className="font-semibold text-[#FFFFFF] text-sm sm:text-base">
                Oberon Shaw, MCH
              </h1>
              <p className="font-normal text-xs sm:text-sm text-blue-200">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[470px] h-auto bg-[#4F9CF9] shadow-lg rounded-2xl p-6 flex flex-col justify-between">
          {/* Icon and Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#FFFFFF]">
              <FaQuoteLeft />
            </h2>
            <p className="text-base sm:text-lg text-[#FFFFFF] font-normal">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          {/* Profile Section */}
          <div className="flex items-center border-t border-blue-300 pt-4">
            <div className="w-16 h-16">
              <Image
                src="/Avater3.png"
                alt="Profile"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <h1 className="font-semibold text-[#FFFFFF] text-sm sm:text-base">
                Oberon Shaw, MCH
              </h1>
              <p className="font-normal text-xs sm:text-sm text-blue-200">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
