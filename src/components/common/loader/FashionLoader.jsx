import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FashionLoader() {
  return (
    <div className="mb-20">
      {/* HeaderCard Skeleton */}
      <div className="flex items-center gap-4">
        <div className="rounded-xl w-full bg-white p-6">
          <div className="mb-4">
            <Skeleton height={30} width={"60%"} />
          </div>
          <Skeleton count={3} />
        </div>
      </div>

      {/* Browse & Explore Section */}
      <section className="bg-white border rounded-2xl my-6 p-6 mt-10">
        {/* Section Title */}
        <Skeleton width={180} height={25} className="mb-3" />
        <Skeleton width={"60%"} height={14} className="mb-6" />

        {/* Grid of Brand Cards */}
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden p-1 w-full md:w-fit space-y-4 shadow-sm bg-gray-50"
            >
              {/* Brand Banner skeleton */}
              <Skeleton height={140} className="rounded-xl" />

              <div className="flex flex-col gap-4 items-start p-3 w-48">
                {/* Logo */}
                <Skeleton height={30} width={90} />

                {/* URL text */}
                <Skeleton width={120} height={12} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
