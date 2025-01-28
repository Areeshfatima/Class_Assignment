import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-screen flex items-center">
      <div className="flex flex-col  gap-4  justify-center px-10 w-1/2 h-48">
        <h1 className="font-bold text-[44px]">Welcome to Our Website</h1>
        <p className="font-normal text-[32px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Iplus has been the industry standard.
        </p>
        <button className="text-white text-2xl w-[237px] h-[66px] p-4 bg-black">
          Contact Us
        </button>
      </div>
      <div className="w-1/2 h-48 flex items-center px-10">
        <Image src="/figma 1.jpg" alt="image" width={502} height={565} />
      </div>
    </div>
  );
}
