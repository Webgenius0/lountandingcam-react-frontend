import React from "react";
import Hero from "../../components/HomePageComponents/Hero";
import HelpingTeenSection from "../../components/HomePageComponents/HelpingTeenSection";
import DiscoverSection from "../../components/HomePageComponents/DiscoverSection";
import HowItWorksSection from "../../components/HomePageComponents/HowItWorksSection";
import GrowTogetherSection from "../../components/HomePageComponents/GrowTogetherSection";
import Newsletter from "../../components/HomePageComponents/Newsletter";

export default function Home() {
  return (
    <div >
      <Hero />
      <HelpingTeenSection />
      <DiscoverSection />
      <HowItWorksSection />
      <GrowTogetherSection />
      <Newsletter />
    </div>
  );
}
