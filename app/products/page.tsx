"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconSolarPanel, IconBattery } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../components/ui/grid";

interface GridItem {
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
}

interface BentoGridBoxProps {
  items: GridItem[];
}

const BentoGridBox: React.FC<BentoGridBoxProps> = ({ items }) => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={index === 3 || index === 6 ? "md:col-span-2" : undefined}
        />
      ))}
    </BentoGrid>
  );
};

const allItems: GridItem[] = [
  {
    title: "JA Solar",
    description: "MONOPERC (565W - 585W)",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/JA-Solar-565W-%E2%80%93-585W.webp"
        alt="JA Solar"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconSolarPanel className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "Jinko Solar",
    description: "MONOPERC (565W - 585W)",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/JinKo-Solar-565W-%E2%80%93-585W.webp"
        alt="Jinko Solar"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconSolarPanel className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "LONGi Solar",
    description: "MONOPERC (565W - 585W)",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/LONGi-Solar-Panel.webp"
        alt="LONGi Solar"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconSolarPanel className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "LONGi Solar (Bifacial)",
    description: "Bifacial (565W - 585W)",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/LONGi-Solar-Bifacial.webp"
        alt="LONGi Solar Bifacial"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconSolarPanel className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "Solax Inverter",
    description: "On Grid Inverter 10KW - 20KW",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/solax-power-inverter.webp"
        alt="Solax Inverter"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconSolarPanel className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "Sofar Inverter",
    description: "On Grid Inverter 10KW - 20KW",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/sofar-2.webp"
        alt="Sofar Inverter"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconSolarPanel className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "Sungrow Inverter",
    description: "On Grid Inverter 10KW - 125KW",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/Sungrow.webp"
        alt="Sungrow Inverter"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconSolarPanel className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "Deye Inverter (Hybrid)",
    description: "Hybrid Inverter 12KW",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/deye2.webp"
        alt="Deye Inverter Hybrid"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconSolarPanel className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "SolarMD (Lithium Battery)",
    description: "Capacity 14.3KW",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2025/04/Untitled-1.webp"
        alt="SolarMD (Lithium Battery)"
        className="w-full h-full min-h-[10rem] rounded-xl object-cover"
      />
    ),
    icon: <IconBattery className="h-4 w-4 text-[#019D4D]" />,
  },
];

const section1Items = allItems.slice(0, 4);
const section2Items = allItems.slice(4, 8);
const section3Items = allItems.slice(8);

export default function FifthSection() {
  return (
    <>
      {/* Hero Section */}
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
              PRODUCTS
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto px-4">
              Explore our premium solar panels and inverters designed for
              efficiency and sustainability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solar Panels Section */}
      <div className="py-20 bg-[#ebebeb]">
        <div className="mb-12">
          <h4 className="text-center text-sm pb-4 font-bold text-[#333333]">
            Latest <span className="text-[#019D4D]">Solar Technologies</span>
          </h4>
          <h2 className="text-4xl font-bold text-center mb-8 text-[#333333]">
            Newest <span className="text-[#019D4D]">Solar Panels</span>
          </h2>
          <p className="text-center text-lg text-[#333333]">
            Discover the latest in solar technology with our premium panels
            designed for efficiency and sustainability.
          </p>
        </div>
        <BentoGridBox items={section1Items} />
      </div>

      {/* Inverter Section */}
      <div className="py-20 bg-[#ebebeb]">
        <div className="mb-12">
          <h4 className="text-center text-sm pb-4 font-bold text-[#333333]">
            Latest <span className="text-[#019D4D]">Inverter Technologies</span>
          </h4>
          <h2 className="text-4xl font-bold text-center mb-8 text-[#333333]">
            Advanced <span className="text-[#019D4D]">Inverters</span>
          </h2>
          <p className="text-center text-lg text-[#333333]">
            Explore our range of inverters designed to maximize solar energy
            conversion for your needs.
          </p>
        </div>
        <BentoGridBox items={section2Items} />
      </div>

      {/* Battery Section */}
      <div className="py-20 bg-[#ebebeb]">
        <div className="mb-12">
          <h4 className="text-center text-sm pb-4 font-bold text-[#333333]">
            Latest{" "}
            <span className="text-[#019D4D]">Batteries Technologies</span>
          </h4>
          <h2 className="text-4xl font-bold text-center mb-8 text-[#333333]">
            Featured <span className="text-[#019D4D]">Batteries</span>
          </h2>
          <p className="text-center text-lg text-[#333333]">
            Discover our top batteries for seamless energy management.
          </p>
        </div>
        <BentoGridBox items={section3Items} />
      </div>
    </>
  );
}
