import React from 'react';
import TopHeader from './ui/topNavbar'; // Updated import to PascalCase
import VerticalText from './ui/VerticalText';
import InfoBox from './ui/infoBox';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[20000ms] hover:scale-110"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/70"></div>
        </div>
      </div>
      
      <VerticalText text="About" />
      
      <TopHeader />
      
      <div className="absolute right-8 bottom-0 z-10 h-[75vh] max-w-[50%] overflow-hidden">
        <div className="relative h-full w-full">
          <img 
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Solar panel professionals" 
            className="h-full w-full object-cover object-center transform scale-105 transition-transform duration-[20000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"></div>
        </div>
      </div>
      
      <InfoBox 
        title="Go Solar With Beyondgreen"
        description="Beyondgreen Solar Solutions is a private entity which provides solar energy services in Pakistan. A renewable energy division that was started in Brisbane, Australia back in 2011 is fulfilling Pakistan's ever-increasing energy demand and crisis since 2015."
      />
    </section>
  );
};

export default HeroSection;