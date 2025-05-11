"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/components/ui/resizable-navbar";
import React, { useState } from "react";

interface NavItem {
  name: string;
  link: string;
}

export const NavbarSection: React.FC = () => {
  const navItems: NavItem[] = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PROJECTS", link: "/projects" },
    { name: "BLOGS", link: "/blogs" },
    { name: "PRODUCTS", link: "/products" },
    { name: "PARTNERS", link: "/partners" },
    { name: "CAREERS", link: "/careers" },
    { name: "CONTACT US", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={navItems}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <NavbarButton variant="primary">Book a call</NavbarButton>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative w-full py-2 text-base text-white hover:text-[#019D4D] focus:outline-none focus:ring-2 focus:ring-[#019D4D] rounded-md"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-2 pt-2">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full py-2 text-base"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};