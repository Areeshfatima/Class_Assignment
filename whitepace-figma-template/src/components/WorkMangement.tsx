import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Work() {
  return (
    <div className="w-full flex flex-col items-center justify-around">
      {/* First Section */}
      <div className="w-full max-w-screen-xl h-auto flex flex-col sm:flex-row items-center justify-center py-12 px-4 gap-8">
        <div className="w-full sm:w-[600px] h-auto sm:h-[400px] flex flex-col items-center text-[#212529] py-8 sm:py-20 px-6 space-y-6">
          <h1 className="font-bold text-2xl sm:text-4xl text-center sm:text-left">
            Project Management
          </h1>
          <p className="font-normal text-sm sm:text-xs text-center sm:text-left">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="w-[200px] h-12 flex items-center justify-center bg-[#4F9CF9] rounded-md text-sm sm:text-base">
            Get Started <IoIosArrowRoundForward />
          </button>
        </div>
        <div className="w-full sm:w-[600px] h-auto sm:h-[300px] bg-[#C4DEFD]"></div>
      </div>

      {/* Second Section */}
      <div className="w-full max-w-screen-xl h-auto flex flex-col sm:flex-row items-center justify-center py-12 px-4 gap-8">
        <Image
          src="/wkimage.png"
          alt="work together image"
          width={600}
          height={300}
          className="w-full sm:w-[600px] h-auto sm:h-[300px] object-contain"
        />
        <div className="w-full sm:w-[600px] h-auto sm:h-[400px] flex flex-col items-center text-[#212529] py-8 sm:py-20 px-6 space-y-6">
          <h1 className="font-bold text-2xl sm:text-3xl text-center sm:text-left">
            Work Together
          </h1>
          <p className="font-normal text-sm sm:text-xs text-center sm:text-left">
            With Whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="w-[200px] h-12 flex items-center justify-center bg-[#4F9CF9] rounded-md text-sm sm:text-base">
            Try it Now
          </button>
        </div>
      </div>
    </div>
  );
}
