import React from "react";
import BookSvg from "../svg/BookSvg";
import ArrowSvg from "../svg/ArrowSvg";
import MoneySvg from "../svg/MoneySvg";
import girlImg from "../../assets/Img/PinkGirlImg.png";
import color from "../../assets/Img/ColorImg.png";
import PaintSvg from "../svg/PaintSvg";
import ClothSvg from "../svg/ClothSvg";
import StarSvg from "../svg/StarSvg";
import PrimaryBtn from "../common/PrimaryBtn";

export default function DiscoverSection() {
  return (
    <section id="about-section" className="bg-linear-90 from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)] relative py-30">
      {/* bg svg  */}
      <span className="absolute right-40">
        <StarSvg />
      </span>
      <span className="absolute bottom-40 left-120">
        <StarSvg />
      </span>

      <div className="2xl:w-9/12 mx-auto">
        {/* section title  */}

        <h2 className="text-5xl text-center mb-5 font-semibold">
          Discover, Create & Grow All in One Place
        </h2>
        <p className="text-center w-6/12 mx-auto mb-12 text-gray-400">
          At Beauté Enterprise, teens explore creativity, build confidence, and
          learn life skills through journaling, fashion, finance, and creative
          design.
        </p>

        {/* grid box content */}

        <div class="grid grid-cols-3 md:grid-cols-3 grid-rows-6 md:grid-rows-6 gap-4 md:gap-4 m-4">
          {/* box 01 Journaling */}
          <div class="col-start-1 hover:scale-95 hover:shadow-xl cursor-grab duration-300 ease-in-out row-start-1 row-span-3 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-3 bg-white rounded-xl p-5">
            <BookSvg />
            <h4 className="text-2xl mt-8 mb-2 font-semibold">Journaling</h4>
            <p className="text-gray-400 mb-8">
              Reflect on weekly events with guided prompts. Write, save, and
              grow your self-awareness with 52 creative entries a year.
            </p>
            <button className="text-primary flex gap-1 cursor-pointer group items-center hover:underline">
              Learn More{" "}
              <span className="group-hover:rotate-45 duration-300 ease-in-out">
                {" "}
                <ArrowSvg />
              </span>
            </button>
          </div>

          {/* box 02 Finance*/}
          <div class="col-start-1 row-start-4 hover:scale-95 hover:shadow-xl cursor-grab duration-300 ease-in-out row-span-3 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-3 bg-white rounded-xl p-5">
            <MoneySvg />
            <h4 className="text-2xl mt-8  mb-2 font-semibold">Finance</h4>
            <p className="text-gray-400 mb-8">
              Learn how to budget and save responsibly. Track your allowance and
              spending monthly, and see your progress over time.
            </p>
            <button className="text-primary flex gap-1 cursor-pointer group items-center hover:underline">
              Learn More{" "}
              <span className="group-hover:rotate-45 duration-300 ease-in-out">
                {" "}
                <ArrowSvg />
              </span>
            </button>
          </div>

          {/* img box */}
          <div class="col-start-2 row-start-1 hover:scale-95 hover:shadow-xl cursor-grab duration-300 ease-in-out  row-span-4 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-4  rounded-xl ">
            <img
              className="rounded-xl min-h-full  object-cover  w-full"
              src={girlImg}
              alt="girl img"
            />
          </div>

          <div class="col-start-2 row-start-5 row-span-2 hover:scale-95 hover:shadow-xl cursor-grab duration-300 ease-in-out md:col-start-2 md:row-start-5 md:col-span-1 md:row-span-2 bg-white rounded-xl ">
            <img className="w-full rounded-xl" src={color} alt="colorful img" />
          </div>

          {/* Fashion box 03 */}
          <div class="col-start-3 row-start-1 row-span-3 hover:scale-95 hover:shadow-xl cursor-grab duration-300 ease-in-out md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-3 bg-white rounded-xl p-5">
            <ClothSvg />
            <h4 className="text-2xl mt-8  mb-2 font-semibold">Fashion</h4>
            <p className="text-gray-400 mb-8">
              Discover your unique style! Browse brands like Zara & H&M, save
              your favorite pieces, and curate your dream wardrobe.
            </p>
            <button className="text-primary flex gap-1 cursor-pointer group items-center hover:underline">
              Learn More{" "}
              <span className="group-hover:rotate-45 duration-300 ease-in-out">
                {" "}
                <ArrowSvg />
              </span>
            </button>
          </div>

          {/* Creative Design box 04 */}
          <div class="col-start-3 row-start-4 row-span-3 hover:scale-95 hover:shadow-xl cursor-grab duration-300 ease-in-out md:col-start-3 md:row-start-4 md:col-span-1 md:row-span-3 bg-white rounded-xl p-5">
            <PaintSvg />
            <h4 className="text-2xl mt-8  mb-2 font-semibold">
              Creative Design
            </h4>
            <p className="text-gray-400 mb-8">
              Unleash your imagination! Customize virtual items like shoes and
              cars using a built-in design tool.
            </p>
            <button className="text-primary flex gap-1 cursor-pointer group items-center hover:underline">
              Learn More{" "}
              <span className="group-hover:rotate-45 duration-300 ease-in-out">
                {" "}
                <ArrowSvg />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <PrimaryBtn text="Join Beaute Today" />
        </div>
      </div>
    </section>
  );
}
