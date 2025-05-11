"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="relative h-[150px] xs:h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] xl:h-[400px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[20000ms] hover:scale-110"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg")',
        }}
        role="img"
        aria-label="Solar panel array under sunlight"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-wide mb-2 sm:mb-4">
            Projects
          </h1>
          <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            Explore our projects and see how we are making a difference in the
            world of solar energy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
