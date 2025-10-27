import React from "react";
import teenImg from "../../assets/Img/GroupPhoto.png";

export default function HelpingTeenSection() {
  return (
    <section id="about-section" className="2xl:w-9/12 w-11/12 mx-auto flex md:gap-10 flex-col lg:flex-row items-center space-y-12  py-10 lg:py-30">
      {/* img content */}
      <div className="flex-1">
        <img src={teenImg} alt="teen img" />
      </div>
      {/* text content */}
      <div className="flex-1">
        <h2 className="lg:text-5xl md:text-4xl text-2xl text-center lg:text-left font-semibold mb-5">
          Helping Every Teen Grow Happy and Successful
        </h2>
        <p className="text-gray-400 text-center text-sm md:text-base lg:text-left mx-auto lg:m lg:w-full w-11/12">
          At Beaute Enterprise, we believe every teen deserves the chance to
          explore their creativity, manage their goals, and discover their
          personal style. Our platform guides them through journaling, fashion,
          finance, and creative design one step at a time.
        </p>
      </div>
    </section>
  );
}
