"use client";

import React, { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";

const SocialLinks: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      setIsLoading(false);
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleMediaChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isMenuOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    }
  };

  const trackSocialClick = (platform: string) => {
    console.log(`Clicked ${platform} link`);
  };

  const socialLinks = [
    {
      id: "facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61575885641451",
      label: "Follow us on Facebook",
      color: "hover:text-[#1877F2]",
    },
    {
      id: "instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/jinnah__xperts/",
      label: "Follow us on Instagram",
      color: "hover:text-[#E4405F]",
    },
    {
      id: "linkedin",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/jinnahxpert",
      label: "Connect on LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const renderDesktopView = () => (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-100">
      <div className={`flex flex-col items-center gap-4 bg-gray-900/90 backdrop-blur-sm p-3 rounded-r-lg shadow-xl border border-gray-700/50`}>
        {socialLinks.map((link) => (
          <div key={link.id} className="group relative">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              aria-label={link.label}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-white bg-gray-800 shadow-sm hover:shadow-lg ${link.color} transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${link.color.split("-")[1]}`}
              onClick={() => trackSocialClick(link.id)}
            >
              {link.icon}
              <span className={`absolute left-full top-1/2 ml-3 px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded whitespace-nowrap ${isReducedMotion ? "" : "opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 ease-in-out"} -translate-y-1/2 pointer-events-none`}>
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
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-100">
      <div className={`flex flex-col items-center gap-3 bg-gray-900/90 backdrop-blur-sm p-2 rounded-r-lg shadow-xl border border-gray-700/50`}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
            aria-label={link.label}
            className={`flex items-center justify-center w-9 h-9 rounded-full text-white bg-gray-800 shadow-sm ${link.color} ${isReducedMotion ? "" : "transition-all duration-300 ease-in-out"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${link.color.split("-")[1]}`}
            onClick={() => trackSocialClick(link.id)}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );

  const renderMobileView = () => (
    <div className="fixed top-1/2 left-0 z-100 -translate-y-1/2" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className={`w-12 h-12 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-r-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer`}
        aria-label={isMenuOpen ? "Close social menu" : "Open social menu"}
      >
        {isMenuOpen ? <X className="w-6 h-6 text-gray-200" /> : <Menu className="w-6 h-6 text-gray-200" />}
      </button>

      <div
        ref={menuRef}
        className={`fixed top-1/2 left-14 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 -translate-x-10 pointer-events-none"
        } flex flex-col items-center gap-3 bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg shadow-2xl border border-gray-700/50`}
      >
        {socialLinks.map((link) => (
          <a
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
            aria-label={link.label}
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white bg-gray-800 shadow-md ${link.color} transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${link.color.split("-")[1]}`}
            onClick={() => {
              trackSocialClick(link.id);
              setIsMenuOpen(false);
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
  

  try {
    return (
      <div role="region" aria-label="Social media links">
        {isLoading ? null : isMobile ? renderMobileView() : isTablet ? renderTabletView() : renderDesktopView()}
      </div>
    );
  } catch (error) {
    console.error("Error in SocialLinks component:", error);
    return <div className="text-red-500 p-4">Error loading social links</div>;
  }
};

export default SocialLinks;