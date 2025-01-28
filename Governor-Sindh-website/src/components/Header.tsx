"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="sticky top-0 border-b w-full h-20 bg-[#044E83] text-[#FAF9F6] flex items-center justify-between px-4 md:px-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={90}
          height={113}
          className="h-auto mt-10"
        />

        <h1 className="hidden md:block text-[#b9d8f3] text-lg md:text-2xl font-extrabold text-center">
          Tuition Free Education Program on Latest Technologies
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/apply">Apply</Link>
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
          <li>
            <Link href="/result">Result</Link>
          </li>
          <li>
            <button className="flex gap-2 items-center" type="button">
              <span>Courses</span>
              <IoIosArrowDown />
            </button>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden text-lg">
              <GiHamburgerMenu />
            </button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Image
                src="/logo.png"
                alt="logo"
                width={60}
                height={80}
                className="h-auto"
              />
            </SheetHeader>
            <nav className="mt-4">
              <ul className="flex flex-col gap-4 text-lg">
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/apply" onClick={() => setIsOpen(false)}>
                    Apply
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" onClick={() => setIsOpen(false)}>
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/result" onClick={() => setIsOpen(false)}>
                    Result
                  </Link>
                </li>
                <li>
                  <button
                    className="flex gap-2 items-center"
                    type="button"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Courses</span>
                    <IoIosArrowDown />
                  </button>
                </li>
              </ul>
            </nav>
            <SheetClose asChild>
              <button className="mt-6 w-1/2 text-center bg-[#044E83] text-[#FAF9F6] py-2 rounded">
                Close
              </button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
