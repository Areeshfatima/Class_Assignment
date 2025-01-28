import React from "react";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { LiaEnvelope } from "react-icons/lia";

const Footer = () => {
  return (
    <div>
      <footer className="w-full mt-20 bg-zinc-100 text-zinc-800">
        <div className="m-auto w-[90%] py-10 flex flex-col lg:flex-row lg:gap-20 gap-10">
          {/* Core Courses Section */}
          <div className="w-full lg:w-1/3">
            <h1 className="font-bold text-xl">Core Courses</h1>
            <ul className="mt-5 text-sm flex flex-col gap-3">
              <li>
                <Link href="#">Programming Fundamentals</Link>
              </li>
              <li>
                <Link href="#">Web2 Using NextJS</Link>
              </li>
              <li>
                <Link href="#">Earn as You Learn</Link>
              </li>
            </ul>
          </div>

          {/* Advanced Courses Section */}
          <div className="w-full lg:w-1/3">
            <h1 className="font-bold text-xl">Advanced Courses</h1>
            <ul className="mt-5 text-sm flex flex-col gap-3">
              <li>
                <Link href="#">Web 3 and Metaverse</Link>
              </li>
              <li>
                <Link href="#">Cloud-Native Computing</Link>
              </li>
              <li>
                <Link href="#">
                  Artificial Intelligence (AI) and Deep Learning
                </Link>
              </li>
              <li>
                <Link href="#">Ambient Computing and IoT</Link>
              </li>
              <li>
                <Link href="#">Genomics and Bioinformatics</Link>
              </li>
              <li>
                <Link href="#">Network Programmability and Automation</Link>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="w-full lg:w-1/3">
            <h1 className="font-bold text-xl">Social Links</h1>
            <div className="my-5 flex gap-3 flex-wrap">
              <Link
                href="#"
                target="_blank"
                className="w-8 h-8 text-white rounded-full flex items-center justify-center bg-[#4267B2]"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-8 h-8 text-white rounded-full flex items-center justify-center bg-[#FF0000]"
              >
                <FaYoutube />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-8 h-8 text-white rounded-full flex items-center justify-center bg-[#1DA1F2]"
              >
                <TfiTwitter />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-8 h-8 text-white rounded-full flex items-center justify-center instagram bg-gradient-to-r from-purple-500 to-pink-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-8 h-8 text-white rounded-full flex items-center justify-center bg-[#171515]"
              >
                <FaTiktok />
              </Link>
            </div>
            <Link
              href="#"
              target="_blank"
              className="mt-4 flex items-center py-1 text-[#044E83] underline"
            >
              <span>
                <LiaEnvelope className="mr-3 w-6 h-6" />
              </span>
              education@governorsindh.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
