import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen relative flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      {/* Background */}
      <div className="absolute inset-0 -z-50 h-full w-full bg-opacity-80 bg-zinc-100">
        <div className="relative z-0 w-full h-full bg-hero bg-cover bg-center">
          {/* White overlay on top of the background image */}
          <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 h-full space-y-10 lg:space-y-0">
        {/* Left Side Content */}
        <div className="text-[#044e83] tracking-wider lg:w-1/2 space-y-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl mt-10 lg:text-4xl font-extrabold leading-snug">
            Governor Sindh
          </h1>
          <h2 className="font-normal text-lg sm:text-xl lg:text-2xl leading-snug">
            Kamran Khan Tessori
          </h2>
          <h3 className="text-[#2EB6E8] font-semibold text-md sm:text-lg lg:text-xl leading-relaxed">
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </h3>
          <p className="font-extrabold text-md sm:text-lg lg:text-xl">
            Earn up to $5,000 / month
          </p>
          <p className="font-bold text-md sm:text-lg lg:text-xl">
            Now admissions are open in Hyderabad
          </p>
          {/* Apply Button and Applications */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-5 justify-center lg:justify-start">
            <Link href="#">
              <button
                className="px-4 py-2 text-sm font-semibold text-white bg-[#044e83] rounded-md hover:bg-[#033b63] transition"
                type="button"
              >
                APPLY NOW
              </button>
            </Link>
            <div className="text-center">
              <p className="text-2xl font-extrabold">562,143</p>
              <p className="text-sm">Accepted Applications</p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full lg:w-full h-64 sm:h-80 lg:h-full flex items-center justify-center lg:justify-end">
          <div className="relative w-3/4 sm:w-2/3 lg:w-3/5 h-full">
            <Image
              src="/kamrantessori.png"
              alt="Kamran Khan Tessori"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
