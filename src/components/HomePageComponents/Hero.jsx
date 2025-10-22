import React from "react";
import PrimaryBtn from "../common/PrimaryBtn";
import SecondaryBtn from "../common/SecondaryBtn";
import blueGirl from "../../assets/Img/BlueGirlPic.svg";
import purpleGirl from "../../assets/Img/PurpleGirlPic.svg";
import creative from "../../assets/Img/CreativePic.svg";

export default function Hero() {
  return (
    <section className="relative mx-5   -mt-16 bg-linear-155 from-[rgba(236,244,250,1)] via-[rgba(235,233,247,1)] via-60% mb-5   lg:rounded-3xl py-70 px-5 lg:px-0 flex  ">
      <div className="2xl:w-9/12 flex  items-start  justify-between mx-auto">
        {/* Content */}
        <div className="relative z-10 flex-1  lg:mr-auto   text-center md:text-left">
          <h1 className="text-3xl md:text-6xl  font-bold mb-4 leading-tight">
            Empowering Teens to Grow, Create, and Discover Themselves
          </h1>
          <p className="  mb-6 text-gray-400">
            Explore journaling, fashion, finance, and creative design all in one
            inspiring platform that empowers teens to express themselves, learn,
            grow, and shape their unique identity.
          </p>

          {/* hero btn */}

          <div className="flex flex-col md:flex-row mt-12 items-center gap-4 justify-center md:justify-start">
            <PrimaryBtn text="Create a New Account" to="/auth/sign-up" />
            <SecondaryBtn text="Explore Feature " />
          </div>
        </div>

        {/* hero picture */}
        <div className="flex-1 flex justify-center   ">
          <div className=" relative -ml-10  -mt-18 gap-3 ">
            <img className="w-64 scale-110" src={blueGirl} alt="girl img" />
            <img
              className="absolute scale-110 w-60 top-20 -right-60"
              src={purpleGirl}
              alt="girl img"
            />
            <img
              className="absolute scale-110 min-w-80 -left-10 -bottom-58"
              src={creative}
              alt="girl img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
