"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LogoCarousel } from '../components/ui/PartnerUI';

const Partners = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const partners = [
    {
      name: 'LONGI',
      logo: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg',
      nameColor: 'text-red-600',
      description: 'Our market partner Longi needs no introduction to the solar industry. Its micro-crystalline technologies, product innovations, and optimization of the power-cost ratio keep it ahead of all other competitors. Moreover, the company provides about a quarter of the global market demand for solar modules. Being the world\'s most valuable company, Longi\'s association with Beyondgreen Solar is a big thing for solar in Pakistan. Therefore, being affiliated with Longi allows us to give replaceable warranties to our customers.'
    },
    {
      name: 'GROWATT',
      logo: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg',
      nameColor: 'text-green-600',
      description: 'Growatt is a global leader in providing solar solutions, in form of smart panels, inverters, etc. These smart energy solutions are the future of solar energy solutions. Most importantly, our partnership with Growatt helps us incorporate these smart solutions in Pakistan and enhance our R&D processes. Indeed, Growatt is currently one of the top 10 inverter brands and the largest residential inverter supplier in the world!'
    },
    {
      name: 'HUAWEI',
      logo: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg',
      nameColor: 'text-red-600',
      description: 'Being a market leader in the industry, Huawei\'s presence in our market partners is indeed a bliss. Certainly, Huawei\'s big name in digital technology and innovation has created a revolution in the world of solar panels and modules. The optimization of latest technologies make Huawei\'s products rich in efficiency and effectiveness. We hope that Huawei\'s association brings more innovative solutions on board for our customers.'
    },
    {
      name: 'SUNGROW',
      logo: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg',
      nameColor: 'text-orange-600',
      description: 'What\'s better than to be partners with a company that has largest R&D team in the industry. Sungrow is the world\'s most bankable solar inverter brand. Moreover, Sungrow\'s presence in over 150 countries is enough to determine the worth of this company. Indeed, Beyondgreen Solar Solutions\' partnership with Sungrow is a breakthrough for solar energy in Pakistan. Hopefully, it will bring more expertise to the market.'
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[20000ms] hover:scale-110"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg")',
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
              Collaborating with industry leaders to bring you the best solar solutions
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

        <div className="space-y-16 md:space-y-24">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-center bg-white rounded-2xl shadow-lg p-6 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="w-full md:w-1/3 lg:w-1/4">
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 lg:w-3/4">
                <motion.h3 
                  className={`text-3xl md:text-4xl font-bold mb-6 ${partner.nameColor}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {partner.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {partner.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="space-y-8 pt-10 pb-24">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <h4 className='text-2xl font-bold text-[#252525]'>
            The best are already here
          </h4>
          <a href="https://www.newcult.co" target="_blank">
            <h1 className='text-6xl font-bold text-[#019D4D]'>Join new cult</h1>
          </a>
        </div>
 
        <LogoCarousel columnCount={3} />
      </div>
    </div>
    </div>
  );
};

export default Partners;