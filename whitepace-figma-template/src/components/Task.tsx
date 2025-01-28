import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Task = () => {
  return (
    <div className="w-full bg-[#043873] text-[#FFFFFF] flex flex-col items-center justify-center py-16 px-4 md:py-[140px] md:px-[220px]">
      {/* Heading and Paragraph Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Your work, everywhere you are
        </h1>
        <p className="text-sm md:text-base font-normal mt-4">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
      </div>

      {/* Button Section */}
      <div>
        <button className="flex items-center justify-center px-6 py-3 bg-[#4F9CF9] text-[#FFFFFF] rounded-lg transition mt-4">
          Try Taskey <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Task;
