"use client";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

export function secondSection() {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col px-8 bg-[#ebebeb]">
      <h2 className="text-xl font-bold mb-10 tracking-tight text-[#333333] sm:text-xl md:text-4xl lg:text-4xl">
        SERVICES
      </h2>
      <p className="text-neutral-500 dark:text-neutral-600 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        We offer{" "}
        <LinkPreview url="https://jesolar.netlify.app/blogs/home-solar-installation-tips" className="font-bold">
          <span className="text-[#019D4D]">
            Residential, Commercial & Industrial,
          </span>
        </LinkPreview>{" "}
        <LinkPreview url="https://jesolar.netlify.app/blogs/maximizing-energy-savings" className="font-bold">
          <span className="text-[#019D4D]">Agriculture Solar Solutions</span>
        </LinkPreview>{" "}
        tailored to your needs. Our systems also include Without Grid Backup
        Solutions for uninterrupted power. With{" "}
        <LinkPreview url="https://jesolar.netlify.app/blogs#" className="font-bold">
          <span className="text-[#019D4D]">Net Metering,</span>
        </LinkPreview>{" "}
        you can save more by sending excess energy back to the grid. Go solar
        today and enjoy reliable, cost-effective, and eco-friendly energy!
      </p>
      <p className="text-neutral-500 dark:text-neutral-600 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview url="https://jesolar.netlify.app" className="font-bold">
          <span className="text-[#019D4D]">Jinnah Expert</span>
        </LinkPreview>{" "}
        for more information.
      </p>
    </div>
  );
}

export default secondSection;
