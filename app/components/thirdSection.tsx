import React from "react";

const ThirdSection: React.FC = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Solar+Panels')",
        }}
      ></div>

      {/* Vertical "About" Text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 transform text-gray-400 text-4xl font-light rotate-90 origin-top-left">
        About
      </div>

      {/* Green "About Beyondgreen" Title Block */}
      <div className="absolute top-0 left-0 w-64 h-32 bg-primary text-white text-center flex items-center justify-center text-xl font-medium">
        About Beyondgreen
      </div>

      {/* White Card with Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Go Solar With Beyondgreen</h2>
          <p className="text-gray-600 mb-4">
            Beyondgreen Solar Solutions is a private entity which provides solar energy
            services in Pakistan. A renewable energy division that was started in Brisbane,
            Australia back in 2011 is fulfilling Pakistan’s ever-increasing energy demand
            and crisis since 2015.
          </p>
          <a href="#" className="text-primary font-medium hover:underline">
            Read More —
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;