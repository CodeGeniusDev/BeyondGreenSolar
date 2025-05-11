"use client"
import React from 'react';
import Link from 'next/link';

interface InfoBoxProps {
  title: string;
  description: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description }) => {
  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-xl z-20">
      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-sm shadow-2xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">{title}</h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          {description}
        </p>
        <div>
          <Link 
            href="/about" 
            className="text-[#019D4D] font-semibold hover:text-[#016f36] transition-colors duration-300 flex items-center group"
          >
            Read More 
            <span className="ml-3 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2">——</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;