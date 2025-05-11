"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/app/components/ui/Accordion";
import Link from "next/link";

const Careers: React.FC = () => {
  const partnerItems = [
    {
      title: "LONGi",
      content:
        "Our market partner LONGi needs no introduction to the solar industry, its micro-crystalline technologies, product innovations, and optimization of the power-cost ratio keep it ahead of other competitors. Moreover, the company provides about a quarter of the global market demand for solar modules. Being the world's most valuable company, LONGi's association with BeyondGreenSolar is a big thing for solar in Pakistan. Therefore, being affiliated with LONGi allows us to give replaceable warranties to our customers.",
    },
    {
      title: "Growatt",
      content:
        "Growatt is a global leader in providing solar solutions, in form of smart panels, inverters, etc. These smart energy solutions are the future of solar energy solutions. Most importantly, our partnership with Growatt helps us incorporate those smart solutions in Pakistan and enhance our R&D projects. Indeed, Growatt is currently one of the top 10 inverter brands and the largest residential inverter supplier in the world.",
    },
    {
      title: "Huawei",
      content:
        "Being a market leader in the industry, Huawei's presence in our market partners is indeed a bliss. Certainly, Huawei's big name in digital technology and innovation has created a revolution in the world of solar panels and modules. The optimization of latest technologies makes Huawei's products rich in efficiency and effectiveness. We hope that Huawei's association brings more innovative solutions on board for our customers.",
    },
    {
      title: "Sungrow",
      content:
        "What's better than to be partners with a company that has the largest R&D team in the industry. Sungrow is the world's most bankable solar inverter brand. Moreover, Sungrow's presence in over 150 countries is enough to determine the worth of this company. Indeed, BeyondGreenSolar's partnership with Sungrow is a breakthrough for solar energy in Pakistan. Hopefully, it will bring expertise to the market.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
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
              CAREERS
            </h1>
            <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
              Join BeyondGreenSolar to collaborate with industry leaders and
              drive sustainable solar solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#252525] font-bold text-center mb-4 sm:mb-6">
            Solar Energy and BeyondGreenSolar
          </h2>
          <p className="text-gray-700 text-sm xs:text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-center mb-4 sm:mb-6">
            Solar energy is a clean, renewable power source that harnesses the
            sun’s abundant energy to generate electricity, reducing carbon
            footprints and energy costs. It’s a sustainable solution for a
            greener future, offering benefits like reduced electricity bills,
            energy independence, and minimal environmental impact.
          </p>
          <p className="text-gray-700 text-sm xs:text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-center mb-4 sm:mb-6">
            At{" "}
            <span className="font-semibold text-[#019D4D]">
              BeyondGreenSolar
            </span>
            , we are committed to revolutionizing solar energy in Pakistan. As a
            leader in solar solutions, we partner with global giants like LONGi,
            Growatt, Huawei, and Sungrow to bring cutting-edge technology to our
            customers. Our mission is to make solar energy accessible,
            affordable, and efficient, empowering communities to embrace
            sustainable energy.
          </p>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-block px-4 py-2 text-sm xs:text-base sm:text-lg text-white bg-[#019D4D] rounded-md hover:bg-[#017B3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#019D4D]"
            >
              Learn More About Our Mission
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion items={partnerItems} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#252525] font-bold text-center">
            Send your CVs to{" "}
            <Link
              href="mailto:careers@beyondgreensolar.com"
              className="text-[#019D4D] hover:underline inline-block px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#019D4D] rounded-md"
            >
              careers@beyondgreensolar.com
            </Link>
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
