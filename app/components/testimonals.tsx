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
    text: "Beyondgreen Solar Solutions is a private entity which provides solar energy services in Pakistan. A renewable energy division that was started in Brisbane, Australia back in 2011 is fulfilling Pakistan's ever-increasing energy demand and crisis since 2015.",
    author: "Mr. Amaduddin Zia",
    position: "CEO of Ahmed Foods"
  },
  {
    id: 2,
    text: "The transition to solar energy with Beyondgreen has been transformative for our business. Their professional approach and technical expertise have helped us achieve significant cost savings while contributing to a sustainable future.",
    author: "Sarah Anderson",
    position: "Operations Director"
  },
  {
    id: 3,
    text: "What sets Beyondgreen apart is their commitment to excellence. From initial consultation to installation and after-service support, they've demonstrated why they're leaders in renewable energy solutions.",
    author: "Michael Chen",
    position: "Sustainability Manager"
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
      {/* Green sidebar */}
      <div className="h-16 w-full bg-green-600 md:h-auto md:w-24" />
      
      {/* Main content */}
      <div className="flex flex-1 items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-3xl">
          {/* Section title */}
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-green-600">
            Testimonials
          </h3>
          
          {/* Heading */}
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:mb-8 md:text-5xl">
            People Says
          </h2>
          
          {/* Testimonial text */}
          <div className="min-h-[150px] sm:min-h-[120px] md:min-h-[150px]">
            <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg md:mb-12 md:text-xl">
              "{testimonials[currentIndex].text}"
            </p>
          </div>
          
          {/* Author */}
          <div className="mb-6 md:mb-8">
            <p className="text-sm font-medium text-gray-900 sm:text-base">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-sm text-gray-600 sm:text-base">
              {testimonials[currentIndex].position}
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Dots */}
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
            
            {/* Navigation buttons */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={handlePrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-all hover:scale-105 hover:bg-green-700 sm:h-12 sm:w-12"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button 
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-all hover:scale-105 hover:bg-green-700 sm:h-12 sm:w-12"
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