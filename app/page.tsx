"use client";

import HeroSection from "./components/HeroSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import ForthSection from "./components/forthSection";
import FifthSection from "./components/fifthSection";
import Testimonials from "./components/testimonals";
import Whatsapp from "./components/ui/Whatsapp";

const Page = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="fixed bottom-10 right-10 z-[9999] cursor-pointer">
        <Whatsapp />
      </div>
      <div className="h-screen w-full">
        <HeroSection />
      </div>

      <SecondSection />
      <ForthSection />
      <ThirdSection />
      <Testimonials />
      <FifthSection />
    </div>
  );
};

export default Page;
