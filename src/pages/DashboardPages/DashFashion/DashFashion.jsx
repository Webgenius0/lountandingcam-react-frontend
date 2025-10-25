import React from "react";
import HeaderCard from "../../../components/common/DashHeaderCard";
import clothGfx from "../../../assets/Img/dashClothImg.png";
import BrowseExplore from "../../../components/DashboardComponents/Fashion/BrowseExplore";
import FavoritesStyle from "../../../components/DashboardComponents/Fashion/FavoritesStyle";

export default function DashFashion() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <HeaderCard
          title="Define Your Style, Express Your Confidence"
          description="Explore trending brands, save your favorite outfits, and curate a personal wardrobe that shows your true personality."
          image={clothGfx}
          gradientColors="from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)]"
          className=" py-8"
        />
      </div>

      <BrowseExplore />
      <FavoritesStyle />
    </div>
  );
}
