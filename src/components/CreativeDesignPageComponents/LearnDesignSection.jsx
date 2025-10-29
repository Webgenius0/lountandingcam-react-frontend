import React from "react";
import PrimaryBtn from "../common/PrimaryBtn";
import DesignImg from "../../assets/Img/DesignImg.png";

export default function LearnDesignSection() {
  return (
    <section className="bg-gray-100 py-10 lg:py-20">
      <div className="2xl:max-w-9/12 w-11/12 mx-auto gap-15 flex flex-col lg:flex-row justify-between items-center ">
        <div className="flex-1  ">
          <img className="rounded-xl" src={DesignImg} alt="colorful img" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">Learn Design Basics</h2>
          <ul className="list-disc text-sm md:text-base mb-12 list-inside flex-col flex gap-4 text-gray-500">
            Offer quick tips or resources:
            <li>Understanding colors and contrast</li>
            <li>Balancing composition</li>
            <li>Using shapes to tell a story</li>
          </ul>

          <PrimaryBtn className="text-sm md:text-base" text="Explore More Activities" to="/" />
        </div>
      </div>
    </section>
  );
}
