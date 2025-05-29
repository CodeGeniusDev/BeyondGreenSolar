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
        "Our market partner LONGi is a key player in the global solar industry, known for its advanced micro-crystalline technologies and innovation in optimizing the power-cost ratio. With around a quarter of the global solar module market share, LONGi strengthens our ability to offer reliable, efficient solar products. At Jinnah Xperts, our collaboration with LONGi ensures we provide high-quality, warranty-backed modules to our clients across Pakistan.",
    },
    {
      title: "Growatt",
      content:
        "Growatt leads the global solar inverter and smart energy solution market. Our partnership with Growatt empowers Jinnah Xperts to deliver state-of-the-art energy solutions including advanced inverters and smart energy systems. As the world’s top residential inverter brand, Growatt helps us enhance energy efficiency and integrate intelligent solar systems across residential, commercial, and industrial sectors in Pakistan.",
    },
    {
      title: "Huawei",
      content:
        "Huawei, a global leader in digital innovation, has brought transformative changes to solar energy through its high-efficiency technologies. Partnering with Huawei allows Jinnah Xperts to deliver cutting-edge solar solutions, leveraging smart features and enhanced system optimization. This collaboration boosts our ability to offer innovative and effective solar infrastructure to our customers.",
    },
    {
      title: "Sungrow",
      content:
        "Sungrow is recognized as the world’s most bankable solar inverter brand and has the largest R&D team in the industry. Operating in over 150 countries, Sungrow represents technological strength and global trust. Our alliance with Sungrow enables Jinnah Xperts to offer reliable and performance-driven inverter solutions, further strengthening our solar installations and advancing our mission of solar empowerment in Pakistan.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[20000ms] hover:scale-110"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-4">
              CAREERS
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto px-4">
              Join Jinnah Xperts to collaborate with industry leaders and deliver
              cost-effective solar power solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#252525] font-bold text-center mb-4 sm:mb-6">
            Solar Energy and Jinnah Xperts
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
              Jinnah Xperts (Private) Limited
            </span>
            , we are dedicated to providing end-to-end solar energy solutions in
            Pakistan. From residential to industrial sectors, we deliver
            cost-effective solar systems tailored to local needs. Our
            partnerships with global solar technology leaders allow us to offer
            premium installations, reliable performance, and sustainable energy
            for all.
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

      <div className="container mx-auto px-8 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion items={partnerItems} />
        </motion.div>
      </div>

      <div className="container mx-auto px-8 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#252525] font-bold text-center">
            Send your CVs to{" "}
            <Link
              href="mailto:info@jinnahexpert.com"
              className="text-[#019D4D] hover:underline inline-block px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#019D4D] rounded-md"
            >
              info@jinnahexpert.com 
            </Link>
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
