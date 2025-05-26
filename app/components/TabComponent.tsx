import { motion } from "framer-motion";
import React, { useState } from "react";
import { MapPin } from "lucide-react";

type City = "Karachi" | "Lahore" | "Gujrat" | "Rawalpindi";

interface Office {
  name: string;
  address: string;
}

type OfficesData = Record<City, Office[]>;

const offices: OfficesData = {
  Karachi: [
    {
      name: "Karachi Central Office",
      address:
        "Office # 63 & 64 Ground Floor Cantonment Shopping Mall, Main Rashid Minhas Road, Gulshan-e-Jamal, Karachi.",
    },
    {
      name: "Karachi East Office",
      address:
        "Office # 09 Runway Commercial AOHS, Falcon, New Malir, Karachi.",
    },
  ],
  Lahore: [
    {
      name: "Lahore Office",
      address:
        "Office # 12 Ittehad Plaza, Near Qaddafi Stadium, Main Liberty Chowk, Gulberg III, Lahore.",
    },
  ],
  Gujrat: [
    {
      name: "Gujrat Office",
      address: "Office # 05 Pehlwan Chowk, Main GT Road, Gujrat.",
    },
  ],
  Rawalpindi: [
    {
      name: "Rawalpindi Office",
      address: "Office # 14 Satellite Town, Rawalpindi.",
    },
  ],
};

const OfficeTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof OfficesData>("Karachi");

  return (
    <div className="max-w-3xl mx-auto p-4 mb-6">
      <motion.h2
        className="text-3xl font-bold text-center text-[#019D4D] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#019D4D] p-3 rounded-lg inline-flex items-center justify-center mr-3">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        Our Offices
      </motion.h2>

      <div className="flex justify-center space-x-6 border-b border-gray-300">
        {(Object.keys(offices) as Array<keyof OfficesData>).map((city) => (
          <button
            key={city}
            onClick={() => setActiveTab(city)}
            className={`pb-2 font-medium text-sm cursor-pointer ${
              activeTab === city
                ? "border-b-2 border-[#019D4D] text-[#019D4D]"
                : "text-gray-600 hover:text-[#019D4D]"
            } transition-colors duration-300`}
            role="tab"
            aria-selected={activeTab === city}
            aria-controls={`${city.toLowerCase()}-panel`}
            id={`${city.toLowerCase()}-tab`}
          >
            {city}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        className="mt-6 space-y-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        role="tabpanel"
        aria-labelledby={`${activeTab.toLowerCase()}-tab`}
        id={`${activeTab.toLowerCase()}-panel`}
        tabIndex={0}
      >
        {offices[activeTab].map(({ name, address }, idx) => (
          <div
            key={idx}
            className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 mt-1">{address}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OfficeTabs;
