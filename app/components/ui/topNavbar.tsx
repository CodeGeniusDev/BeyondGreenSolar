"use client"
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="flex justify-center">
        <div className="bg-[#019D4D] text-center px-16 py-8 w-full max-w-md shadow-lg">
          <Link 
            href="/" 
            className="text-white text-2xl font-semibold tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            About Jinnah Expert
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;