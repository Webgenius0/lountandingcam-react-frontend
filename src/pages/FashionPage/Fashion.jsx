import React from "react";
import Header from "../../components/common/Header";
import HowItWorkFashion from "../../components/FashionPageComponents/HowItWorkFashion";
import Browse from "../../components/FashionPageComponents/Browse";
import Cta from "../../components/common/Cta";

export default function Fashion() {
  return (
    <div>
      <Header
        title="Discover & Define Your Unique Style"
        subtitle="Explore, save, and curate your favorite looks from top brands while building confidence in your personal fashion identity."
        btnText="Discover Your Fashion Style"
        btnLink="/dashboard/fashion"
      />
      <HowItWorkFashion />
      <Browse />
      <Cta />
    </div>
  );
}
