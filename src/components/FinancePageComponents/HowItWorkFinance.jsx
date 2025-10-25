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
    title: "Write & Save Your Prompts",
    description:
      "Capture your thoughts with weekly prompts, save entries securely, and reflect on your personal growth journey.",
    image: img2,
  },
  {
    id: 3,
    step: "Step:3",
    title: "Track Your Growth",
    description:
      "See your progress over time, revisit past reflections, and celebrate how much you’ve grown each week.",
    image: img3,
  },
];

export default function HowItWorkFinance() {
  return (
    <section className="py-30">
      <h2 className="text-5xl text-center mb-5 font-semibold">How It Works</h2>
      <p className="text-center w-4/12 mx-auto mb-12 text-gray-400">
        Start your Beaute journey create an account, explore creativity, track
        growth, and reflect weekly through journaling and design.
      </p>

      <div className="2xl:w-9/12 bg-gray-100 mx-auto p-12 rounded-xl grid gap-10">
        {stepsData.map((step, index) => (
          <div
            key={step.id}
            className={`grid md:grid-cols-2 items-center gap-8  rounded-2xl `}
          >
            {/* text section */}
            <div
              className={`${
                index % 2 !== 0 ? "md:order-2" : "md:order-1"
              } bg-white p-6 rounded-xl h-72 space-y-26`}
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
