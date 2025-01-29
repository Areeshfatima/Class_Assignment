import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Data() {
  return (
    <div className="w-full bg-white text-[#212529] py-12 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-[1200px] mx-auto gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-lg">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            100% your data
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            The app is open source, and your notes are saved to an open format,
            so you'll always have access to them. It uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no one but yourself can
            access them.
          </p>
          <button className="w-[180px] h-12 flex items-center justify-center bg-[#4F9CF9] rounded-md hover:bg-[#377dd8] transition-all">
            <span className="pr-2">Read more</span>
            <IoIosArrowRoundForward />
          </button>
        </div>

        {/* Image Section */}
        <Image
          src="/Element.png"
          alt="element illustration"
          width={500}
          height={250}
          className="w-full max-w-[500px] h-auto"
        />
      </div>
    </div>
  );
}
