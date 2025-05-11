"use client";
import React from "react";
import { motion } from "framer-motion";
// import { LogoCarousel } from "../components/ui/PartnerUI";

const Partners = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const partners = [
    {
      name: "Jinko Solar",
      logo: "https://images.seeklogo.com/logo-png/26/1/jinko-solar-logo-png_seeklogo-265492.png",
      nameColor: "text-[#38AB30]",
    },
    {
      name: "Canadian Solar",
      logo: "https://seeklogo.com/images/C/canadiansolar-logo-8222497A0C-seeklogo.com.png",
      nameColor: "text-[#BD2727]",
    },
    {
      name: "Longi",
      logo: "https://images.seeklogo.com/logo-png/44/1/longi-logo-png_seeklogo-448395.png",
      nameColor: "text-[#E60012]",
    },
    {
      name: "JA Solar",
      logo: "https://images.seeklogo.com/logo-png/37/1/ja-solar-logo-png_seeklogo-371198.png",
      nameColor: "text-[#00479D]",
    },
    {
      name: "SUNGROW",
      logo: "https://images.seeklogo.com/logo-png/31/1/sungrow-power-supply-logo-png_seeklogo-314265.png?v=1955223241192304344",
      nameColor: "text-[#F5821F]",
    },
    {
      name: "HUAWEI",
      logo: "https://images.seeklogo.com/logo-png/6/1/huawei-logo-png_seeklogo-68529.png",
      nameColor: "text-[#F04A34]",
    },
    {
      name: "Solaredge",
      logo: "https://images.seeklogo.com/logo-png/36/1/solaredge-logo-png_seeklogo-362415.png",
      nameColor: "text-[#EF413D]",
    },
    {
      name: "SOFAR",
      logo: "https://www.sofarsolar.com/upload/image/20230110/1673337158608031140.svg",
      nameColor: "text-[#366DB0]",
    },
    {
      name: "Solis",
      logo: "https://cmsdata.solisinverters.com/uploads/image/5bdc2304dbfda.png",
      nameColor: "text-[#F8980A]",
    },
    {
      name: "GROWATT",
      logo: "https://en.growatt.com/upload/image/20220724/322171ae39029a00108a80679869c69a.png?raw=logo.png|Transparent%20Background%20Growatt%20Logo",
      nameColor: "text-[#6EB92B]",
    },
    {
      name: "INVEREX",
      logo: "https://www.aptinverex.com/assets/img/logo.png",
      nameColor: "text-[#ED1C24]",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
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
              PARTNERS
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto px-4">
              Collaborating with industry leaders to bring you the best solar
              solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#019D4D]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Trusted Partners
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="break-inside-avoid flex flex-col gap-6 items-center bg-white rounded-2xl shadow-lg p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="w-full">
                <div className="bg-white p-4 rounded-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <motion.h3
                className={`text-2xl font-bold text-center ${partner.nameColor}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {partner.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="space-y-8 pt-10 pb-24">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-[#252525]">
              The best are already here
            </h4>
            <a href="https://www.newcult.co" target="_blank">
              <h1 className="text-6xl font-bold text-[#019D4D]">
                Join new cult
              </h1>
            </a>
          </div>

          <LogoCarousel columnCount={3} />
        </div>
      </div> */}
    </div>
  );
};

export default Partners;
