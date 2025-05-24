"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Modern Design Systems",
    description:
      "Create cohesive and scalable design systems for modern applications",
    tag: "New",
    tagColor: "bg-emerald-500",
    background:
      "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg",
  },
  {
    title: "Responsive Web Development",
    description:
      "Build beautiful websites that work seamlessly across all devices",
    tag: "Popular",
    tagColor: "bg-blue-500",
    background:
      "https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg",
  },
  {
    title: "Performance Optimization",
    description: "Optimize your applications for maximum speed and efficiency",
    tag: "Essential",
    tagColor: "bg-purple-500",
    background:
      "https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg",
  },
  {
    title: "User Experience Design",
    description: "Create intuitive and engaging user experiences that delight",
    tag: "Guide",
    tagColor: "bg-pink-500",
    background:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    title: "API Integration",
    description: "Seamlessly connect your applications with powerful APIs",
    tag: "Advanced",
    tagColor: "bg-amber-500",
    background:
      "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
  },
  {
    title: "Cloud Solutions",
    description: "Scale your applications with modern cloud infrastructure",
    tag: "Featured",
    tagColor: "bg-indigo-500",
    background:
      "https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg",
  },
];

const ProjectsPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Auto-close popup after 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-sm w-full">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              This page is in Development...
            </h3>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-[#019D4D] text-white px-6 py-2 rounded-lg hover:bg-[#016f36] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
              Projects
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto px-4">
              Explore our projects and see how we are making a difference in the
              world of solar energy.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-[#ebebeb]">
        <div className="mb-12 px-8 container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-center text-sm pb-4 font-bold text-[#333333]">
              <span className="text-[#019D4D]">OUR PORTFOLIO</span>
            </h4>
            <h2 className="text-4xl font-bold text-center mb-8 text-[#333333]">
              We provide <span className="text-[#019D4D]">Solar Solution</span>
            </h2>
            <p className="text-center text-lg text-[#333333]">
              Our portfolio showcases innovative and reliable solar energy
              solutions designed to power homes and businesses sustainably.
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.background})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`${product.tagColor} px-3 py-1 rounded-full text-xs font-semibold text-white`}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {product.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {product.description}
                        </p>
                      </div>
                      <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/contact">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#019D4D] px-8 py-3 text-base font-medium text-white transition duration-300 ease-out hover:bg-[#016f36] focus:outline-none focus:ring-2 focus:ring-[#019D4D] focus:ring-offset-2 cursor-pointer">
              <span className="relative flex items-center">Contact Now!</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
