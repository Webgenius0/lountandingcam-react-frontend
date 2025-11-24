import React from "react";
import HeaderCard from "../../../components/common/DashHeaderCard";
import clothGfx from "../../../assets/Img/dashClothImg.png";
import BrowseExplore from "../../../components/DashboardComponents/Fashion/BrowseExplore";
// import FavoritesStyle from "../../../components/DashboardComponents/Fashion/FavoritesStyle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import CreativeLoader from "../../../components/common/loader/CreativeLoader";
import FashionLoader from "../../../components/common/loader/FashionLoader";

export default function DashFashion() {


   const axiosSecure = useAxiosSecure();

  // Get method
  const { data: fashion = [], isLoading } = useQuery({
    queryKey: ["fashion"],
    queryFn: async () => {
      const res = await axiosSecure.get("/fashion");
      return res.data;
    },
  });

  //loading-skeleton
  if (isLoading) {
    return (
      <>
       <FashionLoader/>
      </>
    );
  }

  const fashionData =  fashion.data;

  console.log(fashionData)


  return (
    <div className="mb-20">
      <div className="flex items-center gap-4">
        <HeaderCard
          title="Define Your Style, Express Your Confidence"
          description="Explore trending brands, save your favorite outfits, and curate a personal wardrobe that shows your true personality."
          image={clothGfx}
          gradientColors="from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)]"
          className=" py-8"
        />
      </div>

      <BrowseExplore fashionData={fashionData} />
      {/* <FavoritesStyle /> */}
    </div>
  );
}
