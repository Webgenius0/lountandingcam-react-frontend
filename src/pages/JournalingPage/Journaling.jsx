import React from "react";
import JournalingHeader from "../../components/JournalingPageComponents/JournalingHeader";
import HowItWorkJournaling from "../../components/JournalingPageComponents/HowItWorkJournaling";
import Cta from "../../components/common/Cta";

export default function Journaling() {
  return (
    <div>
      <JournalingHeader />
      <HowItWorkJournaling />
      <Cta />
    </div>
  );
}
