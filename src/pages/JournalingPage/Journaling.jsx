import React from "react";
import HowItWorkJournaling from "../../components/JournalingPageComponents/HowItWorkJournaling";
import Cta from "../../components/common/Cta";
import Header from "../../components/common/Header";
import Reflect from "../../components/JournalingPageComponents/Reflect";

export default function Journaling() {
  return (
    <div>
      <Header
        title="Discover Yourself Through Journaling"
        subtitle="Reflect, write, and grow with 52 guided prompts designed to help you know yourself better."
        btnText="Start Journaling"
        btnLink="/dashboard"
      />
      <HowItWorkJournaling />
      <Reflect />
      <Cta />
    </div>
  );
}
