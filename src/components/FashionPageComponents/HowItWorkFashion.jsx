import React from "react";

import img1 from "../../assets/Img/FashionImg1.png";
import img2 from "../../assets/Img/FashionImg3.png";
import img3 from "../../assets/Img/FashionImg2.png";

const stepsData = [
  {
    id: 1,
    step: "Step:1",
    title: "Explore Brands You Love",
    description: "Browse fashion stores like Zara, H&M, or ASOS directly through Beauté. Find inspiration from endless trends and styles.",
    image: img1,
  },
  {
    id: 2,
    step: "Step:2",
    title: "Save What Inspires You",
    description:
      "Click “Save to My Wardrobe” to collect items that match your personality and aesthetic.Your favorites are stored in your personalized wardrobe page.",
    image: img2,
  },
  {
    id: 3,
    step: "Step:3",
    title: "Create Your Lookbook",
    description:
      "Experiment with color, texture, and layering express your individuality through fashion.",
    image: img3,
  },
];

export default function HowItWorkFashion() {
  return (
    <section className=" py-10 lg:py-30">
       <h2 className="lg:text-5xl md:text-4xl text-2xl  text-center mb-5 font-semibold">How It Works</h2>
     <p className="text-center text-sm md:text-base lg:w-6/12 xl:w-4/12 w-11/12 mx-auto mb-12 text-gray-400">
      Discover, save, and style your favorite fashion pieces from top brands all in one creative space.
      </p>

      <div className="2xl:w-9/12 bg-gray-100 mx-auto p-4 lg:p-12 rounded-xl grid gap-10">
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
             <div className="w-full overflow-hidden rounded-xl  h-72">
               <img
                src={step.image}
                alt={step.title}
                className=" w-full h-full  hover:scale-105 duration-300 object-cover "
              />
             </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
