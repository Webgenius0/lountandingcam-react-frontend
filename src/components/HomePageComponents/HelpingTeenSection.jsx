import React from "react";
import teenImg from "../../assets/Img/GroupPhoto.png";

export default function HelpingTeenSection() {
  return (
    <section id="about-section" className="2xl:w-9/12 mx-auto flex items-center  py-30">
      {/* img content */}
      <div className="flex-1">
        <img src={teenImg} alt="teen img" />
      </div>
      {/* text content */}
      <div className="flex-1">
        <h2 className="text-5xl font-semibold mb-5">
          Helping Every Teen Grow Happy and Successful
        </h2>
        <p className="text-gray-400 w-11/12">
          At Beaute Enterprise, we believe every teen deserves the chance to
          explore their creativity, manage their goals, and discover their
          personal style. Our platform guides them through journaling, fashion,
          finance, and creative design one step at a time.
        </p>
      </div>
    </section>
  );
}
