import React from "react";
import { motion } from "framer-motion";
import teenImg from "../../assets/Img/GroupPhoto.png";
import pinkImg from "../../assets/Img/pinkSvg.png";

export default function HelpingTeenSection() {
  return (
    <section
      id="about-section"
      className="2xl:w-9/12 w-11/12 mx-auto flex md:gap-10 flex-col lg:flex-row items-center space-y-12  py-10 lg:py-30"
    >
      {/* img content */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8,
        }}
        className="flex-1 relative mx-auto"
      >
        <img
          className="absolute w-10 md:w-19 z-10 bottom-0"
          src={pinkImg}
          alt="svg img"
        />

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", position: "absolute" }}
            width="0"
            height="0"
          >
            <defs>
              <clipPath id="clip" clipPathUnits="objectBoundingBox">
                <path
                  d="M0 0.5236C0 0.5558 0.0227 0.5818 0.0508 0.5818H0.1079C0.1360 0.5818 0.1587 0.6079 0.1587 0.64V0.7991C0.1587 0.8312 0.1815 0.8573 0.2095 0.8573H0.2571C0.2852 0.8573 0.3079 0.8833 0.3079 0.9155V0.9418C0.3079 0.9739 0.3306 1 0.3587 1H0.9492C0.9773 1 1 0.9739 1 0.9418V0.0582C1 0.0261 0.9773 0 0.9492 0H0.0508C0.0227 0 0 0.0261 0 0.0582V0.5236Z"
                  fill="url(#pattern0_18752_3823)"
                />
              </clipPath>
            </defs>
          </svg>

          <div
            className="lg:w-[630px] lg:h-[550px]  "
            style={{ clipPath: "url(#clip)" }}
          >
            <img
              className="w-full h-full object-cover"
              src={teenImg}
              alt="teen img"
            />
          </div>
        </div>
      </motion.div>

      {/* text content */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8,
        }}
        className="flex-1"
      >
        <h2 className="lg:text-5xl md:text-4xl text-2xl text-center lg:text-left font-semibold mb-5">
          Helping Every Teen Grow Happy and Successful
        </h2>
        <p className="text-gray-400 text-center text-sm md:text-base lg:text-left mx-auto lg:m lg:w-full w-11/12">
          At Beaute Enterprise, we believe every teen deserves the chance to
          explore their creativity, manage their goals, and discover their
          personal style. Our platform guides them through journaling, fashion,
          finance, and creative design one step at a time.
        </p>
      </motion.div>
    </section>
  );
}
