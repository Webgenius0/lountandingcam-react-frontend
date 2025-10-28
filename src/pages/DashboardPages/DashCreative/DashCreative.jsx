import React from "react";
import HeaderCard from "../../../components/common/DashHeaderCard";
import creativeGfx from "../../../assets/Img/dashFinanceImg.png";
import DesignGallery from "../../../components/DashboardComponents/CreativeDesign/DesignGallery";

export default function DashCreative() {
  return (
    <div className="mb-20">
      <HeaderCard
        title="Define Your Style, Express Your Confidence"
        description="Explore trending brands, save your favorite outfits, and curate a personal wardrobe that shows your true personality."
        image={creativeGfx}
        gradientColors="from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)]"
        className=" py-8"
      />
      <DesignGallery />
    </div>
  );
}
