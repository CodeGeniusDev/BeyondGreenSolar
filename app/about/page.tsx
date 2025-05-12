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
              About Jinnah Expert
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto px-4">
              Welcome to our Company
            </p>
          </motion.div>
        </div>
      </div>

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
          <motion.div className="w-full md:w-1/3 relative" variants={fadeInUp}>
            <div className="bg-[#019D4D] p-6 mr-10 sm:p-8 text-white relative">
              <div className="flex flex-col justify-center items-center gap-2 py-8 sm:py-10 px-4 sm:px-6">
                <h4 className="text-xs sm:text-sm text-center uppercase tracking-wider">
                  ABOUT JINNAH EXPERT
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
          <motion.div
            className="w-full md:w-2/3 mt-12 md:mt-0"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Go Solar With Jinnah Expert
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              Jinnah Xpert (Private) Limited is an end-to-end solution provider
              for our clients' solar needs. Our core essence lies in providing
              the most-cost effective solar solutions following the best
              practices in Installation and Commissioning for 1-tier PV Solar
              power projects for both Grid-connected and Hybrid solution for
              residential, commercial and industrial consumers.
            </p>
            <br />
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              As a leading solar solution provider, we offer a comprehensive
              range of innovative services, including solar panel installation,
              energy efficient solutions, and sustainable power system for
              diverse applications. By choosing Jinnah Xpert, you're not just
              embracing solar energy you're joining us and greener Pakistan.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="container mx-auto px-4 py-8 sm:py-12 md:py-16"
        ref={achievementsRef}
      >
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl py-4 mb-4 font-semibold text-gray-800">
            What We Do
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            At Jinnah Xpert (Pvt. Ltd.) we specialize in providing innovative
            solar solutions that empower Pakistan's transition toward
            sustainable energy sources. Our expertise lies in designing,
            implementing, and maintaining cutting-edge solar systems for
            residential, commercial, and industrial clients across the nation.
            By harnessing the power of the sun, we offer a range of
            comprehensive and tailored solutions, including solar panel
            installations, energy storage. systems and efficient grid
            intergration.
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            Our dedicated team of professionals collaborates closely with
            clients to understand their unique energy needs, ensuring the
            delivery of cost-effective, reliable, and eco-friendly solutions
            that contribute to a greener and more resilient future for Pakistan.
          </p>
        </motion.div>
      </div>

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

      <div
        className="container mx-auto px-4 py-8 sm:py-12 md:py-16"
        ref={achievementsRef}
      >
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Jinnah Expert <span className="text-[#019D4D]">Achievements</span>
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
              {isInView && <CountUp end={100} duration={2} />}+
            </motion.p>
            <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
              Projects done.
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
