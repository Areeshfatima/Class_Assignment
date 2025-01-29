import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowForward } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full bg-[#043873] text-white py-10 px-6">
      {/* Center Container */}
      <div className="max-w-[1200px] mx-auto flex flex-col space-y-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Column 1 */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="flex items-center font-bold text-lg mb-4">
              <Image
                src="/logo.png"
                alt="logo"
                width={24}
                height={24}
                className="mr-2"
              />
              whitepace
            </h3>
            <p className="text-sm">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="font-bold text-lg mb-4">Try It Today</h3>
            <p className="text-sm mb-4">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="w-[200px] h-12 bg-[#4F9CF9] rounded-lg flex items-center justify-center hover:bg-[#377dd8] transition">
              Start today
              <IoIosArrowForward className="ml-2" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left List */}
          <ul className="flex flex-wrap gap-4 text-sm">
            <li className="flex items-center gap-1">
              <TbWorld />
              English
              <IoIosArrowDropdown />
            </li>
            <li>Terms & privacy</li>
            <li>Security</li>
            <li>Status</li>
            <li>©2021 Whitepace LLC.</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
