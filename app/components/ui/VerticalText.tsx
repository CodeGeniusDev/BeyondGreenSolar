"use client"
import React from 'react';

interface VerticalTextProps {
  text: string;
}

const VerticalText: React.FC<VerticalTextProps> = ({ text }) => {
  return (
    <div className="absolute left-0 top-0 h-full flex items-center pl-16 z-10">
      <div className="-rotate-90 origin-center transform whitespace-nowrap select-none">
        <span className="text-[#737373] text-9xl font-bold opacity-20 tracking-widest">{text}</span>
      </div>
    </div>
  );
};

export default VerticalText;