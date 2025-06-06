"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { span } from "framer-motion/client";
import { LinkPreview } from "../ui/link-preview";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex mb-6">
              <div className="flex justify-center items-center gap-4">
                <img className="h-20" src="../../favicon.ico" alt="logo" />
                <h2 className="text-2xl font-semibold">Jinnah Xperts</h2>
              </div>
            </Link>
            <div className="space-y-3 text-gray-400">
              <p>
                Go green with Jinnah Xperts Solar! Quality solar panels for
                homes and businesses in Pakistan. Contact us today!
              </p>
              <p>
                <span className="font-medium text-[#019D4D]">UAN No:</span>{" "}
                0333-8211195
              </p>
              <p>
                <span className="font-medium text-[#019D4D]">Landline:</span>{" "}
                021-34572065
                <br />
                021-34685110
              </p>
              <p>
                <span className="font-medium text-[#019D4D]">Email:</span>{" "}
                info@jinnahexpert.com
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Offices</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[#019D4D] font-medium mb-2">
                  Karachi central office
                </h3>
                <p className="text-gray-400">
                  Office #63 & 64 Cantonment Mall Main Rashid Minhas Road
                  Gulshan e Jamal,
                  <br />
                  Karachi, 75260.
                </p>
              </div>
              <div>
                <h3 className="text-[#019D4D] font-medium mb-2">
                  Lahore Office
                </h3>
                <p className="text-gray-400">
                  Office #12 Ittehad Plaza near Qadafi Stadium Main Liberty
                  Chowk, Gulberg III,
                  <br />
                  Lahore.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Call Now</h2>
            <Link href="tel:03338211195">
              <button className="w-full border cursor-pointer border-[#019D4D] text-[#019D4D] py-3 px-6 hover:bg-[#019D4D] hover:text-white transition-colors duration-300">
                Click Here To Call Now!
              </button>
            </Link>
            <div className="flex flex-col space-y-3 text-gray-400 mt-6">
              <Link href="/privacy-policy">
                <span className="font-medium text-[#019D4D] cursor-pointer hover:text-white hover:underline">
                  PRIVACY POLICY
                </span>
              </Link>
              <Link href="/terms-conditions">
                <span className="font-medium text-[#019D4D] cursor-pointer hover:text-white hover:underline">
                  TERMS & CONDITIONS
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2025{" "}
            <LinkPreview url="https:///jinnahexpert.com" className="font-bold">
              <span className="text-[#019D4D]">Jinnah Xperts</span>
            </LinkPreview>{" "}
            All Rights Reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Developed by{" "}
            <LinkPreview
              url="https://portfolio.triplealpha.blog"
              className="font-bold"
            >
              <span className="text-[#019D4D]">CodeGenius.Dev</span>
            </LinkPreview>{" "}
            with ❤️
          </div>
          <div className="flex space-x-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=61575885641451"
              className="text-gray-400 hover:text-[#019D4D] transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/jinnah__xperts/"
              className="text-gray-400 hover:text-[#019D4D] transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/jinnahxpert"
              className="text-gray-400 hover:text-[#019D4D] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            {/* <a
              href="https://www.youtube.com/@jinnahexpert"
              className="text-gray-400 hover:text-[#019D4D] transition-colors duration-300"
            >
              <Youtube size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
