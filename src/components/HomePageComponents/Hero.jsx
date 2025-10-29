import React from "react";
import PrimaryBtn from "../common/PrimaryBtn";
import SecondaryBtn from "../common/SecondaryBtn";
// import blueGirl from "../../assets/Img/BlueGirlImg.png";
// import purpleGirl from "../../assets/Img/PurpleGirlPic.png";
// import creative from "../../assets/Img/creativity.png";
import RedStarSvg from "../svg/RedStarSvg";
import GreenStarSvg from "../svg/GreenStarSvg";
import XSvg from "../svg/XSvg";
import IdeaSvg from "../svg/IdeaSvg";
import heroImg from '../../assets/Img/heroImg.png'
// import circleImg from '../../assets/Img/heroBlueSvg.png'
// import circleImg1 from '../../assets/Img/heroPurpleSvg.png'

export default function Hero() {
  return (
    <section className="relative  lg:mx-5 -mt-16 bg-linear-155 from-[rgba(236,244,250,1)] via-[rgba(235,233,247,1)] via-100% mb-5   lg:rounded-3xl xl:py-20 xl:pt-40 pt-30 pb-10  flex ">
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

      <div className="2xl:w-9/12 w-11/12  flex flex-col-reverse lg:flex-row items-center 2xl:gap-30  justify-between mx-auto">
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
          </div>

        {/* <div className="flex-1 relative  flex  lg:-mt-30 2xl:pl-40 mb-10">
    
          <img className="absolute z-10 right-64  -top-40" src={circleImg} alt="" />
          <img className="absolute z-10 top-48 max-h-15  right-56 " src={circleImg1} alt="" />


          <div className="absolute -top-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", position: "absolute" }}
              width="0"
              height="0"
            >
              <defs>
                <clipPath id="clip1" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.8306 0C0.8457 0 0.8555 0.0121 0.8555 0.025V0.025C0.8555 0.0857 0.9103 0.135 0.978 0.135C0.989 0.135 1 0.1429 1 0.1532V0.9208C1 0.9641 0.9602 1 0.9119 1H0.0881C0.0398 1 0 0.9641 0 0.9208V0.08C0 0.0358 0.0398 0 0.0881 0H0.8306Z"
                    fill="#A7D6EE"
                  />
                </clipPath>
              </defs>
            </svg>

            <div
              className="max-w-[270px] min-w-40 max-h-[296px]  "
              style={{ clipPath: "url(#clip1)" }}
            >
              <img
                className=" object-cover"
                src={blueGirl}
                alt="teen img"
              />
            </div>
          </div>

     
          <div className="absolute -top-12 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", position: "absolute" }}
              width="0"
              height="0"
            >
              <defs>
                <clipPath id="clip2" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.9119 0C0.9602 0 1 0.0365 1 0.0816V0.9177C1 0.9628 0.9602 1 0.9119 1H0.2822C0.2588 1 0.2414 0.977 0.2436 0.9568C0.2442 0.9512 0.2445 0.9456 0.2445 0.9394C0.2445 0.8542 0.1698 0.7857 0.0773 0.7857C0.0695 0.7857 0.0619 0.7866 0.0543 0.7875C0.0275 0.7913 0 0.775 0 0.7526V0.0816C0 0.0365 0.0398 0 0.0881 0H0.9119Z"
                    fill="#A68EDA"
                  />
                </clipPath>
              </defs>
            </svg>

            <div
              className="max-w-[270px] max-h-[296px]   "
              style={{ clipPath: "url(#clip2)" }}
            >
              <img
                className=" object-cover"
                src={purpleGirl}
                alt="teen img"
              />
            </div>
          </div>

       

          <div className="absolute right-52 top-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", position: "absolute" }}
              width="0"
              height="0"
            >
              <defs>
                <clipPath id="clip3" clipPathUnits="objectBoundingBox">
                  <path d="M0.0967,0H0.5106A0.0967,0.1328,0,0,1,0.6073,0.1328V0.1328A0.0967,0.1328,0,0,0,0.7039,0.2656H0.9033A0.0967,0.1328,0,0,1,1,0.3983V0.8672A0.0967,0.1328,0,0,1,0.9033,1H0.0967A0.0967,0.1328,0,0,1,0,0.8672V0.1328A0.0967,0.1328,0,0,1,0.0967,0Z"/>
                </clipPath>
              </defs>
            </svg>

            <div
              className="max-w-[391px] max-h-[220px]  "
              style={{ clipPath: "url(#clip3)" }}
            >
              <img
                className=" object-cover"
                src={creative}
                alt="creative"
              />
            </div>

          </div>


        </div> */}
        
      </div>
    </section>
  );
}
