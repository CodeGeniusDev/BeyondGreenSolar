"use client"
import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  className = '', 
  children 
}) => {
  return (
    <a 
      href={href} 
      className={`inline-flex items-center ${className}`}
    >
      {children}
    </a>
  );
};