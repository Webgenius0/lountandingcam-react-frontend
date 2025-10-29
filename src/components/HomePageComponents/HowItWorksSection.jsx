import React from "react";
import img1 from "../../assets/Img/HowItImg01.png";
import img2 from "../../assets/Img/HowItImg02.png";
import img3 from "../../assets/Img/HowItImg03.png";

const stepsData = [
  {
    id: 1,
    step: "Step:1",
    title: "Create Your Account",
    description: "Personalize your profile and access your private workspace.",
    image: img1,
  },
  {
    id: 2,
    step: "Step:2",
    title: "Explore & Create",
    description:
      "Write journal entries, build outfits, manage finances, and design objects.",
    image: img2,
  },
  {
    id: 3,
    step: "Step:3",
    title: "Save & Reflect",
    description: "Personalize your profile and access your private workspace.",
    image: img3,
  },
];

export default function HowItWorksSection() {
  return (
    <section className=" py-10  lg:py-30">
      <h2 className="lg:text-5xl md:text-4xl text-2xl  text-center mb-5 font-semibold">How It Works</h2>
      <p className="text-center text-sm md:text-base w-11/12 lg:w-4/12 mx-auto mb-12 text-gray-400">
        Start your Beaute journey create an account, explore creativity, track
        growth, and reflect weekly through journaling and design.
      </p>

      <div className="2xl:w-9/12 p-4 bg-gray-100 mx-auto  lg:p-12 rounded-xl grid gap-10">
        {stepsData.map((step, index) => (
          <div
            key={step.id}
            className={`grid md:grid-cols-2 items-center gap-8  rounded-2xl `}
          >
            {/* text section */}
            <div
              className={`${
                index % 2 !== 0 ? "md:order-2" : "md:order-1"
              } bg-white p-6 rounded-xl md:h-72 space-y-10 md:space-y-26`}
            >
              <p className="text-gray-400 text-3xl font-semibold">
                {step.step}
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* img Section */}
            <div className={`${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-72 object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
