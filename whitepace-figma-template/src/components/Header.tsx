"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowRoundForward, IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[92px] bg-[#043873] flex items-center justify-between px-6 text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo icon"
          width={100}
          height={100}
          className="w-[37px] h-[29px]"
        />
        <span className="text-2xl font-bold ml-2">whitepace</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-12">
        <ul className="flex gap-8 text-[18px] font-medium">
          <li>
            <Link href="#" className="flex items-center">
              Products <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Solution <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Resources <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Pricing <IoIosArrowDown />
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <button
            className="w-[100px] h-[40px] bg-[#FFE492] rounded-lg"
            type="button"
          >
            Login
          </button>
          <button
            className="flex items-center justify-center w-[200px] h-[40px] bg-[#4F9CF9] rounded-lg"
            type="button"
          >
            Try Whitespace free
            <IoIosArrowRoundForward className="ml-2" />
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden">
        <button
          className="text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Sheet */}
      {menuOpen && (
        <div className="absolute top-[92px] left-0 w-full bg-[#043873] text-white flex flex-col items-center py-6 space-y-6 lg:hidden z-50">
          <ul className="text-center text-lg space-y-4">
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Solution
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-4">
            <button
              className="w-[100px] h-[40px] bg-[#FFE492] rounded-lg"
              type="button"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </button>
            <button
              className="w-[200px] h-[40px] bg-[#4F9CF9] rounded-lg flex items-center justify-center"
              type="button"
              onClick={() => setMenuOpen(false)}
            >
              Try Whitespace free
              <IoIosArrowRoundForward className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
