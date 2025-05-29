import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Jinnah Xperts installed our residential solar system, and the results are amazing! Our electricity bills have dropped significantly. The team was professional, quick, and very helpful throughout the process.",
    author: "Ahmed Raza",
    position: "Lahore"
  },
  {
    id: 2,
    text: "We chose Jinnah Xperts for our factory’s solar setup, and it was the best decision. Their Commercial & Industrial solution is reliable and has helped us save big on energy costs.",
    author: "Muhammad Asif",
    position: "Faisalabad"
  },
  {
    id: 3,
    text: "Thanks to Jinnah Xperts, our farm now runs on clean solar energy without any grid support. Their Agriculture Solar Solution is efficient and perfect for remote areas.",
    author: "Muhammad Imran",
    position: "Karachi"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col md:flex-row">
      <div className="h-16 w-full bg-green-600 md:h-auto md:w-24" />

      <div className="flex flex-1 items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-3xl">
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-green-600">
            Testimonials
          </h3>
          
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:mb-8 md:text-5xl">
            People Says
          </h2>
          
          <div className="min-h-[150px] sm:min-h-[120px] md:min-h-[150px]">
            <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg md:mb-12 md:text-xl">
              "{testimonials[currentIndex].text}"
            </p>
          </div>
          
          <div className="mb-6 md:mb-8">
            <p className="text-sm font-medium text-gray-900 sm:text-base">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-sm text-gray-600 sm:text-base">
              {testimonials[currentIndex].position}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex justify-center gap-3 sm:justify-start">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 sm:h-3 sm:w-3 ${
                    index === currentIndex ? 'bg-green-600' : 'bg-green-600/40'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex justify-center gap-4">
              <button 
                onClick={handlePrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-all hover:scale-105 hover:bg-green-700 sm:h-12 sm:w-12 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button 
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-all hover:scale-105 hover:bg-green-700 sm:h-12 sm:w-12 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;