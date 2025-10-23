import React from "react";
import PrimaryBtn from "./PrimaryBtn";

export default function Header({
  title,
  subtitle,
  btnText,
  btnLink,
  className = "",
}) {
  return (
    <section
      className={`relative mx-5 -mt-16 bg-linear-155 from-[rgba(236,244,250,1)] via-[rgba(235,233,247,1)] via-60% mb-5 lg:rounded-3xl py-40 pt-50 px-5 lg:px-0 flex ${className}`}
    >
      <div className="text-center 2xl:w-9/12 mx-auto flex justify-center flex-col z-10">
        <h1 className="text-5xl font-semibold mb-4">{title}</h1>
        <p className="mb-12 w-6/12 text-center mx-auto text-gray-400">{subtitle}</p>
        <PrimaryBtn text={btnText} to={btnLink} />
      </div>
    </section>
  );
}
