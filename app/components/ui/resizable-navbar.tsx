"use client";

import { cn } from "@/app/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody: React.FC<NavBodyProps> = ({
  children,
  className,
  visible,
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
          : "none",
        width: visible ? "min(90%, 1280px)" : "100%",
        y: visible ? 8 : 0,
        borderRadius: visible ? "16px" : "0px",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 0.5,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between px-4 py-3 sm:px-6 xl:flex",
        visible && "bg-[#333333]/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems: React.FC<NavItemsProps> = ({
  items,
  className,
  onItemClick,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center gap-2 text-sm font-medium text-white sm:gap-3 lg:gap-4 xl:gap-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative font-bold px-2 py-2 text-[#019D4D] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#019D4D] rounded-md sm:px-3"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[#019d4cb6]"
              transition={{ duration: 0.2 }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav: React.FC<MobileNavProps> = ({
  children,
  className,
  visible,
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
          : "none",
        width: visible ? "min(95%, 600px)" : "100%",
        paddingRight: visible ? "8px" : "0px",
        paddingLeft: visible ? "8px" : "0px",
        borderRadius: visible ? "12px" : "0px",
        y: visible ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 0.5,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between py-3 xl:hidden",
        visible && "bg-[#333333]/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader: React.FC<MobileNavHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-4 py-2 sm:px-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  children,
  className,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "absolute inset-x-0 top-20 z-50 flex w-full flex-col items-start gap-2 bg-[#333333] backdrop-blur-[10px] px-4 py-4 shadow-lg",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle: React.FC<{
  isOpen: boolean;
  onClick: () => void;
}> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="p-2 focus:outline-none focus:ring-2 focus:ring-[#019D4D] rounded-md"
    >
      {isOpen ? (
        <IconX className="h-6 w-6 text-white" />
      ) : (
        <IconMenu2 className="h-6 w-6 text-white" />
      )}
    </button>
  );
};

export const NavbarLogo: React.FC = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 px-2 py-2 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-[#019D4D] rounded-md"
    >
      <img
        src="/favicon.ico"
        alt="BeyondGreenSolar"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="font-extrabold text-[#019D4D]">JESolar</span>
    </Link>
  );
};

export const NavbarButton: React.FC<{
  href?: string;
  as?: "a" | "button";
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark";
  onClick?: () => void;
}> = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  onClick,
}) => {
  const baseStyles =
    "px-3 py-2 rounded-md text-sm font-bold cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center sm:px-4 focus:outline-none focus:ring-2 focus:ring-[#019D4D]";

  const variantStyles = {
    primary: "bg-[#019D4D] text-white shadow-md hover:bg-[#017B3A]",
    dark: "bg-[#333333] text-white shadow-md hover:bg-[#222222]",
  };

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </Tag>
  );
};
