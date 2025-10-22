import React from "react";
import PrimaryBtn from "../common/PrimaryBtn";

export default function Newsletter() {
  return (
    <div className="bg-linear-90 text-center from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)] 2xl:w-9/12 mx-auto rounded-xl py-30 my-30">
      <h3 className="text-5xl text-center mb-5 font-semibold">
        Stay Inspired with Beaute
      </h3>
      <p className="text-center w-4/12 mx-auto mb-12 text-gray-400">
        Subscribe to get weekly prompts, creative tips, and updates that help
        you grow with confidence.
      </p>

      <div className="flex gap-5 items-center justify-center">
        <input
          className="w-76 py-3 px-8   bg-white border placeholder:text-gray-400 rounded-full"
          placeholder="Enter Your Email"
          type="text"
        />
        <PrimaryBtn text="Subscribe Now" to="/" />
      </div>
    </div>
  );
}
