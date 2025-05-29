"use client";

import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";

const SocialLinks: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Renamed for consistency
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640); // Mobile: < 640px
      setIsTablet(width >= 640 && width < 1024); // Tablet: 640px - 1023px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const socialLinks = [
    {
      id: "facebook",
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.facebook.com/profile.php?id=61575885641451",
      label: "Follow us on Facebook",
      color: "hover:text-[#1877F2]",
    },
    {
      id: "instagram",
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.instagram.com/jinnah__xperts/",
      label: "Follow us on Instagram",
      color: "hover:text-[#E4405F]",
    },
    {
      id: "linkedin",
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.linkedin.com/company/jinnahxpert",
      label: "Connect on LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const renderDesktopView = () => (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 sm:p-3 rounded-r-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50">
        {socialLinks.map((link) => (
          <div key={link.id} className="group relative">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              aria-label={link.label}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md ${link.color} transform transition-all duration-300 ease-in-out`}
            >
              {link.icon}
              <span className="absolute left-full top-1/2 ml-3 px-2 py-1 bg-gray-800 text-white text-[12px] font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none -translate-y-1/2">
                {link.label}
                <span className="absolute right-full top-1/2 w-2 h-2 -mr-1 -translate-y-1/2 rotate-45 bg-gray-800"></span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabletView = () => (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 rounded-r-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
            aria-label={link.label}
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-sm ${link.color} transition-all duration-300 hover:scale-110`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );

  const renderMobileView = () => (
    <div className="fixed top-1/2 -left-[2px] z-40 transform -translate-y-1/2">
      <button
        onClick={toggleMenu}
       className="w-10 h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-white rounded-r-full shadow-lg flex items-center justify-center text-white transition-transform duration-200 cursor-pointer"
        aria-label={isMenuOpen ? "Close social menu" : "Open social menu"}
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <div
        className={`fixed left-4 top-16 flex flex-col items-center gap-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-2 rounded-lg shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 transform origin-top ${
          isMenuOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        {socialLinks.map((link) => (
          <a
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
            aria-label={link.label}
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md ${link.color} transition-all duration-300 hover:scale-110`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );

  if (isMobile) return renderMobileView();
  if (isTablet) return renderTabletView();
  return renderDesktopView();
};

export default SocialLinks;