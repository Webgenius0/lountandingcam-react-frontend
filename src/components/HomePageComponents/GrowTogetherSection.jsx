import React from "react";
import groupImg from "../../assets/Img/GroupImg.svg";
import PrimaryBtn from "../common/PrimaryBtn";

export default function GrowTogetherSection() {
  return (
    <section className="relative   mx-auto  py-40 px-5 lg:px-0 flex items-center justify-center text-white overflow-hidden">

      {/* bg img + gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={groupImg}
          alt="Solar Panel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-40 text-center ">
        <h2 className=" font-semibold mb-4 text-5xl">Grow Together</h2>
        <p className=" text-xl w-5/12 mx-auto mb-6 text-gray-400">
          At Beauté, growth is not a solo journey. Teens join a safe, inspiring
          space where creativity meets confidence guided by experts and
          surrounded by peers who share their dreams. Join Beauté today and
          start your creative journey one prompt, one dream, one step at a time.
        </p>
        <div className="flex flex-col mt-12 md:flex-row items-center gap-4 justify-center ">
          <PrimaryBtn
            className="bg-white  text-black!"
            text="Create My Account"
          />
        </div>
      </div>
    </section>
  );
}
