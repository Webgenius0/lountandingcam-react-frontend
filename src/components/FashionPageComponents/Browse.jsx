import React from "react";
import img1 from "../../assets/Img/BrowseImg1.svg";
import img2 from "../../assets/Img/BrowseImg2.svg";
import img3 from "../../assets/Img/BrowseImg3.svg";
import img4 from "../../assets/Img/BrowseImg4.svg";
import hmLogo from "../../assets/Img/h&mLogo.svg";
import zaraLogo from "../../assets/Img/zaraLogo.svg";
import amazonLogo from "../../assets/Img/amazonLogo.svg";

import Marquee from "react-fast-marquee";
import PrimaryBtn from "../common/PrimaryBtn";

export default function Browse() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="2xl:max-w-9/12 mx-auto gap-15 flex justify-between items-center ">
        <div className="flex-1 flex gap-4 ">
          <div className="flex flex-col gap-4 items-center">
            <img className="rounded-xl" src={img1} alt="" />
            <img className="rounded-xl" src={img3} alt="" />
          </div>
          <div className="flex flex-col mt-15 gap-4 items-center">
            <img className="rounded-xl" src={img2} alt="" />
            <img className="rounded-xl w-full" src={img4} alt="" />
          </div>

          {/* 
<div class="grid grid-cols-2 md:grid-cols-2 grid-rows-7 md:grid-rows-7 gap-4 md:gap-4 m-4">
      <div class="col-start-2 row-start-2 row-span-3 md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-3  rounded-xl"><img className='rounded-xl w-full' src={img2} alt="" /></div>
      <div class="col-start-2 row-start-5 row-span-3 md:col-start-2 md:row-start-5 md:col-span-1 md:row-span-3  rounded-xl"><img className='rounded-xl w-full' src={img4} alt="" /></div>
      <div class="col-start-1 row-start-1 row-span-3 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-3  rounded-xl"><img className='rounded-xl h-full object-cover  w-full' src={img1} alt="" /></div>
      <div class="col-start-1 row-start-4 row-span-3 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-3  rounded-xl"><img className='rounded-xl h-full w-full' src={img3} alt="" /></div>
    </div> */}

        </div>
        <div className="flex-1">
          <h2 className="text-5xl font-semibold mb-4">Browse & Explore</h2>
          <p className="mb-12 text-gray-400">
            Discover your style by browsing external fashion brands like Zara,
            H&M, or ASOS. When you click on a link, it opens the brand’s website
            in a new tab so you can shop freely while staying connected to your
            Beaute account.
          </p>

        <PrimaryBtn className="mb-20" text="Explore Brands" to="/" />

         <Marquee autoFill={true}  pauseOnHover gradientColor="#f3f4f6" gradient={true}  speed={40}>
          <div className=" px-2 py-5 flex items-center  gap-2">
              <img className="p-4 bg-white border h-16 rounded-md" src={hmLogo} alt="" />
            <img className="p-4 bg-white border h-16 rounded-md" src={zaraLogo} alt="" />
            <img className="p-4  bg-white border h-16 rounded-md" src={amazonLogo} alt="" />
          </div>
          
  </Marquee>
        </div>
      </div>
    </section>
  );
}
