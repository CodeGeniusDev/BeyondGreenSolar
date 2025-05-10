"use client";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

export function secondSection() {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col px-4">
      <h2 className="text-xl font-bold mb-10 tracking-tight text-[#333333] sm:text-xl md:text-4xl lg:text-4xl">
        SERVICES
      </h2>
      <p className="text-neutral-500 dark:text-neutral-600 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        We are{" "}
        <LinkPreview
          url="https://beyondgreensolar.com"
          className="font-bold"
        >
          <span className="text-[#019D4D]">Problem Solvers</span>
        </LinkPreview>{" "}
        You can expect superior quality solar modules from{" "}
        <LinkPreview
          url="https://solartechinnovations.co.za"
          className="font-bold"
        >
          <span className="text-[#019D4D]">SolarTech Innovations,</span>
        </LinkPreview>{" "}
        and a dedicated team of certified installers performing calculations,
        analysis, and designs for your ease.
      </p>
      <p className="text-neutral-500 dark:text-neutral-600 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://beyondgreensolar.com"
          className="font-bold"
        >
          <span className="text-[#019D4D]">BeyondGreenSolar</span>
        </LinkPreview>{" "}
        for more information.
      </p>
    </div>
  );
}

export default secondSection;
