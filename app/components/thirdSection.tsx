"use client";

import React, { useEffect, useRef } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/app/lib/utils";

interface WorkStep {
  number: string;
  title: string;
  description: string;
}

const steps: WorkStep[] = [
  {
    number: "01/06",
    title: "Initial Consultation",
    description: "We begin with a detailed consultation to understand your energy needs."
  },
  {
    number: "02/06",
    title: "Site Analysis",
    description: "Our team analyzes the site to assess suitability for solar installation."
  },
  {
    number: "03/06",
    title: "System Recommendation",
    description: "Our team then recommends the suitable system that can be installed at the analyzed place. The size of system is determined accordingly."
  },
  {
    number: "04/06",
    title: "3D Design",
    description: "Our engineer briefs the customers every in and out of the system with presentation of proper 3D Design."
  },
  {
    number: "05/06",
    title: "Installation",
    description: "The installation process is done by a highly trained staff. The process might take some days/weeks, according to the size of system."
  },
  {
    number: "06/06",
    title: "After-sales service",
    description: "After installation, a proper demo is presented to customers. Moreover, we try to provide the best after-sales service."
  }
];

const HowWeWork: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
    duration: 30 // Smooth transition duration
  });
  const autoScrollInterval = useRef<number | null>(null);

  useEffect(() => {
    if (emblaApi) {
      // Auto-scroll every 3 seconds
      autoScrollInterval.current = window.setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      // Clean up interval on component unmount
      return () => {
        if (autoScrollInterval.current) {
          clearInterval(autoScrollInterval.current);
        }
      };
    }
  }, [emblaApi]);

  return (
    <div className="min-h-screen w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-green-600 md:text-6xl lg:text-7xl">
            .Just like us
          </h1>
          <p className="mb-8 text-lg text-gray-500 md:text-xl">
            Technology is best when it brings people together
          </p>
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-green-600">
            Steps of co-operation
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            How We Work
          </h2>
        </div>

        {/* Scrolling Cards */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex-none w-[300px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px]"
              >
                <div className="space-y-2">
                  <div className="h-px w-12 bg-green-600"></div>
                  <p className="text-lg font-medium text-green-600">{step.number}</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;