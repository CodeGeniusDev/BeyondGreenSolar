"use client";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Button: React.FC = () => {
  return (
    <Link href="https://wa.me/+923008285818" target="_blank">
    {/* <Link href="https://wa.me/+923291540015" target="_blank"> */}
      <div className="group relative flex items-center justify-center z-[9999] text-[#019D4D] bg-white border border-[#019D4D] rounded-full p-2.5 cursor-pointer">
        <button className="focus:outline-none">
          <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 duration-200 hover:text-green-500 cursor-pointer" />
        </button>
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 z-[9999] origin-bottom scale-0 px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-gray-300 bg-white text-xs sm:text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 whitespace-nowrap">
          WhatsApp
        </span>
      </div>
    </Link>
  );
};

export default Button;
