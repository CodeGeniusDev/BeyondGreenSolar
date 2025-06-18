"use client";

import HeroSection from "./components/HeroSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import ForthSection from "./components/forthSection";
import FifthSection from "./components/fifthSection";
import Testimonials from "./components/testimonals";
import dynamic from 'next/dynamic';

// Dynamically import AdSenseAd components with SSR disabled to avoid window is not defined errors
const AdSenseAd = dynamic(
  () => import('./components/ui/AdSenseAd').then(mod => mod.default),
  { ssr: false }
);

const AutoRelaxedAd = dynamic(
  () => import('./components/ui/AdSenseAd').then(mod => mod.AutoRelaxedAd),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="h-screen w-full">
        <HeroSection />
      </div>
      
      {/* Auto Relaxed Ad Unit */}
      {/* <div className="container mx-auto px-4 py-8">
        <AutoRelaxedAd />
      </div> */}

      <SecondSection />
      <div className="container mx-auto px-4 py-8">
        <AdSenseAd />
      </div>
      <ForthSection />
      <div className="container mx-auto px-4 py-8">
        <AdSenseAd />
      </div>
      <ThirdSection />
      <div className="container mx-auto px-4 py-8">
        <AdSenseAd />
      </div>
      <Testimonials />
      <div className="container mx-auto px-4 py-8">
        <AdSenseAd />
      </div>
      <FifthSection />
    </div>
  );
};

export default Page;
