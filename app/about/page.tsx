"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage: React.FC = () => {
  const achievementsRef = useRef(null);
  const isInView = useInView(achievementsRef, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const numberAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <motion.div
        className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/70"></div>
        </div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide text-center">
            ABOUT BEYOND GREEN SOLAR
          </h1>
        </motion.div>
      </motion.div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.div
            className="w-full md:w-1/3 relative"
            variants={fadeInUp}
          >
            <div className="bg-[#019D4D] p-6 mr-10 sm:p-8 text-white relative">
              <div className="flex flex-col justify-center items-center gap-2 py-8 sm:py-10 px-4 sm:px-6">
                <h4 className="text-xs sm:text-sm text-center uppercase tracking-wider">
                  ABOUT BEYONDGREEN
                </h4>
                <h1 className="text-xl sm:text-2xl md:text-[2.2rem] font-bold text-white text-center">
                  Welcome to our Company
                </h1>
              </div>
              <img
                src="../favicon.ico"
                alt="Company logo"
                className="absolute bottom-[-30%] sm:bottom-[-35%] left-[88%] transform -translate-x-1/2 h-24 sm:h-32 md:h-36 w-24 sm:w-32 md:w-36 object-contain"
              />
            </div>
          </motion.div>
          <motion.div className="w-full md:w-2/3 mt-12 md:mt-0" variants={fadeInUp}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Go Solar With Beyondgreen
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              Beyondgreen Solar Solutions is a private entity which provides
              sol ar energy services in Pakistan. Our renewable energy division,
              which began in Brisbane, Australia in 2011, has been addressing
              Pakistan's growing energy demands and challenges since 2015. We're
              committed to delivering sustainable and efficient solar solutions
              to homes and businesses across the country.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Just Like Us Section */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 mt-10">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#019D4D]">
              . Just like us
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
              Let's make a brighter future together
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center mb-8 md:mb-16"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/7431989/pexels-photo-7431989.jpeg"
              alt="Solar professional"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16" ref={achievementsRef}>
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Beyondgreen <span className="text-[#019D4D]">Achievements</span>
          </h3>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <motion.div
            className="text-center"
            variants={numberAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {isInView && <CountUp end={3} duration={2} />}
            </motion.p>
            <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
              Years of Excellence
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={numberAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {isInView && <CountUp end={3000} duration={2} />}+
            </motion.p>
            <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
              Happy Customers
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={numberAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {isInView && <CountUp end={40} duration={2} />}+
            </motion.p>
            <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
              Expert Team Members
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CountUp = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

export default AboutPage;