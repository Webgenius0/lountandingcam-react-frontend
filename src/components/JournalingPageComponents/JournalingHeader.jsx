import React from "react";
import PrimaryBtn from "../common/PrimaryBtn";

export default function JournalingHeader() {
  return (
    <section className="relative mx-5   -mt-16 bg-linear-155 from-[rgba(236,244,250,1)] via-[rgba(235,233,247,1)] via-60% mb-5   lg:rounded-3xl py-40 pt-50 px-5 lg:px-0 flex  ">
      {/* Content */}
      <div className=" text-center 2xl:w-9/12 mx-auto flex justify-center flex-col z-10 ">
        <h1 className="text-5xl   font-semibold mb-4 ">
          Discover Yourself Through Journaling
        </h1>
        <p className="  mb-12 text-gray-400">
          Reflect, write, and grow with 52 guided prompts designed to help you
          know yourself better
        </p>

        <PrimaryBtn text="Start Journaling" to="/" />
      </div>
    </section>
  );
}
