import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <div className="w-full bg-[#FFFFFF] text-[#212529] flex flex-col items-center py-16 px-4">
      {/* Heading Section */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Our Sponsors</h1>
      </div>

      {/* Logos Section */}
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {/* Logo 1 */}
        <Image
          src="/Apple.png"
          alt="Sponsor 1"
          width={500}
          height={500}
          className="h-12 md:h-16 w-auto object-contain mx-auto"
        />
        {/* Logo 2 */}
        <Image
          src="/microsoft 1.png"
          alt="Sponsor 2"
          width={500}
          height={500}
          className="h-12 md:h-16 w-auto object-contain mx-auto"
        />
        {/* Logo 3 */}
        <Image
          src="/Slack.png"
          alt="Sponsor 3"
          width={500}
          height={500}
          className="h-12 md:h-16 w-auto object-contain mx-auto"
        />
        {/* Logo 4 */}
        <Image
          src="/Google.png"
          alt="Sponsor 4"
          width={500}
          height={500}
          className="h-12 md:h-16 w-auto object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default Sponsor;
