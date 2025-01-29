import Image from "next/image";

export default function Customize() {
  return (
    <div className="w-full bg-white flex items-center justify-center py-12 px-4 lg:py-16 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1350px] gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="w-full max-w-[600px] h-[200px] md:h-[300px] bg-[#C4DEFE]"></div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[600px] space-y-6">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Customize it to your needs
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-[#212529]">
            Customize the app with plugins, custom themes, and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <button
            aria-label="Start customizing the app"
            className="w-[180px] h-12 flex items-center justify-center bg-[#4F9CF9] rounded-md hover:bg-[#377dd8] transition-all"
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
}
