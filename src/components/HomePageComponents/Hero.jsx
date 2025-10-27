import React from "react";
import PrimaryBtn from "../common/PrimaryBtn";
import SecondaryBtn from "../common/SecondaryBtn";
// import blueGirl from "../../assets/Img/BlueGirlPic.svg";
// import purpleGirl from "../../assets/Img/PurpleGirlPic.png";
// import creative from "../../assets/Img/CreativePic.svg";
import heroImg from "../../assets/Img/heroImg.png";
import RedStarSvg from "../svg/RedStarSvg";
import GreenStarSvg from "../svg/GreenStarSvg";
import XSvg from "../svg/XSvg";
import IdeaSvg from "../svg/IdeaSvg";

export default function Hero() {
  return (
    <section className="relative  lg:mx-5 -mt-16 bg-linear-155 from-[rgba(236,244,250,1)] via-[rgba(235,233,247,1)] via-100% mb-5   lg:rounded-3xl xl:py-50 pt-30 pb-15  flex ">
      <span className="absolute hidden lg:block bottom-4 right-4">
        <RedStarSvg />
      </span>
      <span className="absolute hidden lg:block bottom-40 right-240">
        <GreenStarSvg />
      </span>
      <span className="absolute hidden lg:block 2xl:top-18 top-12 lg:scale-50 2xl:scale-75 -right-30 2xl:-right-2">
        <XSvg />
      </span>
      <span className="absolute hidden lg:block top-10 scale-90 opacity-20 left-10">
        <IdeaSvg />
      </span>

      <div className="2xl:w-9/12 w-11/12  flex flex-col-reverse lg:flex-row items-center  justify-between mx-auto">
        {/* Content */}
        <div className="relative z-10 flex-1  lg:mr-auto   text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl xl:text-5xl lg:text-6xl   font-bold mb-4 leading-tight">
            Empowering Teens to Grow, Create, and Discover Themselves
          </h1>
          <p className=" text-sm  mb-6 text-gray-400">
            Explore journaling, fashion, finance, and creative design all in one
            inspiring platform that empowers teens to express themselves, learn,
            grow, and shape their unique identity.
          </p>

          {/* hero btn */}

          <div className="flex flex-col md:flex-row lg:mt-12 items-center gap-4 justify-center lg:justify-start">
            <PrimaryBtn
              className="text-sm lg:text-base"
              text="Create a New Account"
              to="/auth/sign-up"
            />
            <SecondaryBtn
              className="text-sm lg:text-base"
              to="/dashboard"
              text="Explore Feature "
            />
          </div>
        </div>

        {/* hero picture */}
        <div className="flex-1 flex justify-end mb-10  ">
          <img
            className="relative xl:w-150 md:w-120 w-80"
            src={heroImg}
            alt="hero img"
          />

          {/* <div className=" relative lg:-ml-10   lg:-mt-18 gap-3 ">
            <img className="lg:w-64 w-44  scale-110" src={blueGirl} alt="girl img" />
            <img
              className="absolute scale-110 w-42 lg:w-60 top-15 lg:top-20 -right-44 lg:-right-60"
              src={purpleGirl}
              alt="girl img"
            />
            <img
              className="absolute scale-110 lg:min-w-80 min-w-50 lg:-left-10 -bottom-39 lg:-bottom-58"
              src={creative}
              alt="girl img"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
