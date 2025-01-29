import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import React from "react";

const Pricing = () => {
  return (
    <div className="w-full bg-[#FFFFFF] text-[#212529] flex flex-col items-center py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h1>
        <p className="text-base md:text-xl font-normal mt-4">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="w-full max-w-[350px] bg-[#FFFFFF] text-[#212529] shadow-lg border-[#FFE492] border rounded-2xl p-8 flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Free</h2>
            <h2 className="text-xl font-bold">$0</h2>
            <p className="mt-2">Capture ideas and find them quickly</p>
          </div>
          <div className="flex-grow">
            <ul className="space-y-4">
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 bg-[#FFFFFF] text-[#212529] rounded-lg border-[#FFE492] border transition hover:shadow-lg">
            Get Started
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-[350px] bg-[#043873] text-[#FFFFFF] shadow-lg border-[#FFE492] border rounded-2xl p-8 flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Personal</h2>
            <h2 className="text-xl font-bold text-[#FFE492]">$11.99</h2>
            <p className="mt-2">Keep home and family on track</p>
          </div>
          <div className="flex-grow">
            <ul className="space-y-4">
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2 text-[#FFE492]" />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2 text-[#FFE492]" />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2 text-[#FFE492]" />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2 text-[#FFE492]" />
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2 text-[#FFE492]" />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2 text-[#FFE492]" />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 bg-[#4F9CF9] text-[#FFFFFF] rounded-lg border-[#FFE492] border transition hover:shadow-lg">
            Get Started
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-[350px] bg-[#FFFFFF] shadow-lg border-[#FFE492] border rounded-2xl p-8 flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Organization</h2>
            <h2 className="text-xl font-bold">$49.99</h2>
            <p className="mt-2">Capture ideas and find them quickly</p>
          </div>
          <div className="flex-grow">
            <ul className="space-y-4">
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 bg-[#FFFFFF] text-[#212529] rounded-lg border-[#FFE492] border transition hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
