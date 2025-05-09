import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    title: 'Power the Future with Solar',
    subtitle: 'Sustainable energy solutions for a brighter tomorrow',
    buttonText: 'Get Started'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
    title: 'GreenBYSolar',
    subtitle: 'Join the renewable energy revolution today',
    buttonText: 'Learn More'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slides[currentSlide].title}
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="mt-10">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 ease-out bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <span className="relative flex items-center">
                  {slides[currentSlide].buttonText}
                </span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;