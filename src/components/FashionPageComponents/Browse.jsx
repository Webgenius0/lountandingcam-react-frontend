import React from "react";
import img1 from "../../assets/Img/BrowseImg1.png";
import img2 from "../../assets/Img/BrowseImg2.png";
import img3 from "../../assets/Img/BrowseImg3.png";
import img4 from "../../assets/Img/BrowseImg4.png";
import hmLogo from "../../assets/Img/h&mLogo.svg";
import zaraLogo from "../../assets/Img/zaraLogo.svg";
import amazonLogo from "../../assets/Img/amazonLogo.svg";

import Marquee from "react-fast-marquee";
import PrimaryBtn from "../common/PrimaryBtn";

export default function Browse() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="2xl:max-w-9/12 w-11/12 mx-auto gap-15 flex flex-col lg:flex-row justify-between items-center ">
        <div className="flex-1 flex gap-5 2xl:gap-0  ">
          <div className="flex flex-col gap-4 items-center">
            <div className="overflow-hidden rounded-xl">
              <img
                className="rounded-xl w-full h-full duration-300 ease-in-out hover:scale-105"
                src={img1}
                alt="man img"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                className="rounded-xl w-full h-full duration-300 ease-in-out hover:scale-105"
                src={img3}
                alt="girl img"
              />
            </div>
          </div>
          <div className="flex flex-col mt-15 gap-4 items-center">
            <div className="overflow-hidden rounded-xl">
              {" "}
              <img
                className="rounded-xl w-full h-full duration-300 ease-in-out hover:scale-105"
                src={img2}
                alt="man img"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                className="rounded-xl w-full h-full duration-300 ease-in-out hover:scale-105"
                src={img4}
                alt="girl img"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-11/12 lg:max-w-6/12">
          <h2 className="lg:text-5xl text-2xl md:text-3xl font-semibold mb-4">
            Browse & Explore
          </h2>
          <p className="mb-12 text-gray-400">
            Discover your style by browsing external fashion brands like Zara,
            H&M, or ASOS. When you click on a link, it opens the brand’s website
            in a new tab so you can shop freely while staying connected to your
            Beaute account.
          </p>

          <PrimaryBtn className="lg:mb-20 mb-10" text="Explore Brands" to="/" />

          <Marquee
            autoFill={true}
            pauseOnHover
            gradientColor="#f3f4f6"
            gradient={true}
            speed={40}
          >
            <div className=" px-5 py-5 flex items-center  gap-5">
              <img
                className="p-4 bg-white border h-16 rounded-md"
                src={hmLogo}
                alt="hm logo"
              />
              <img
                className="p-4 bg-white border h-16 rounded-md"
                src={zaraLogo}
                alt="zara logo"
              />
              <img
                className="p-4  bg-white border h-16 rounded-md"
                src={amazonLogo}
                alt="amazon Logo"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
