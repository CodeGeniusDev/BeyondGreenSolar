"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "@/app/components/ui/Accordion";
import Link from "next/link";

const Careers: React.FC = () => {
  const partnerItems = [
    {
      title: "LONGi",
      content:
        "Our market partner LONGi needs no introduction to the solar industry, its micro-crystalline technologies, product innovations, and optimization of the power-cost ratio keep it ahead of other competitors. Moreover, the company provides about a quarter of the global market demand for solar modules. Being the world's most valuable company, LONGi's association with Beyondgreen Solar is a big thing for solar in Pakistan. Therefore, being affiliated with LONGi allows us to give replaceable warranties to our customers.",
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
        "What's better than to be partners with a company that has the largest R&D team in the industry. Sungrow is the world's most bankable solar inverter brand. Moreover, Sungrow's presence in over 150 countries is enough to determine the worth of this company. Indeed, Beyondgreen Solar Solutions partnership with Sungrow is a breakthrough for solar energy in Pakistan. Hopefully, it will bring expertise to the market.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-full overflow-hidden">
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
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-wide mb-4">
              CAREERS
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto px-4">
              Join our team to collaborate with industry leaders and drive sustainable solar solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion items={partnerItems} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <motion.div>
        <h2 className="text-3xl text-[#252525] font-bold text-center">Send your CVs to <Link href="mailto:careers@beyondgreensolar.com" className="text-[#019D4D] hover:underline">careers@beyondgreensolar.com</Link></h2>
      </motion.div>
      </div>
    </div>
  );
};

export default Careers;