import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";

export default function Header({
  title,
  subtitle,
  btnText,
  btnLink,
  routeTitle,
  className = "",
}) {
  return (
    <section
      className={`relative lg:mx-5 -mt-16 bg-linear-155 from-[rgba(236,244,250,1)] via-[rgba(235,233,247,1)] via-100% mb-5 lg:rounded-3xl py-10 lg:py-40 pt-40 lg:pt-50 px-5 lg:px-0 flex ${className}`}
    >
      <div className="text-center 2xl:w-9/12 mx-auto flex justify-center flex-col z-10">
        <h1 className="md:text-4xl text-2xl lg:text-5xl font-semibold mb-4">
          {title}
        </h1>
        <p className="lg:mb-12 mb-6 lg:w-6/12 text-center mx-auto text-gray-600">
          {subtitle}
        </p>

        {/* show button or route */}
        {btnText && btnLink ? (
          <PrimaryBtn text={btnText} to={btnLink} />
        ) : routeTitle ? (
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm bg-white px-4 py-2 rounded-md w-fit mx-auto">
            <Link to="/" className="hover:text-gray-800 font-medium">
              Home
            </Link>
            <span className="text-gray-400">{">"}</span>
            <span className="text-primary font-medium">{routeTitle}</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
