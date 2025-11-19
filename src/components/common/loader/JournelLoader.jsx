import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function JournelLoader() {
  return (
    <div className="mb-20">
      {/* Header + Progress section */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* HeaderCard Skeleton */}
        <div className="rounded-xl w-full lg:w-[60%] bg-white p-6">
          <div className="mb-4">
            <Skeleton height={30} width={"60%"} />
          </div>
          <Skeleton count={3} />
        </div>

        {/* Progress Skeleton */}
        <div className="rounded-xl border bg-white p-4 w-full lg:w-fit flex flex-col items-center gap-3">
          <Skeleton circle height={140} width={140} />
          <Skeleton width={180} height={20} />
        </div>
      </div>

      {/* Week Cards Loader */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <div className="flex gap-3 mb-4 items-center">
              <Skeleton width={120} height={28} />
              <Skeleton circle width={30} height={30} />
            </div>

            <div className="bg-white p-4 border rounded-xl">
              <div className="flex justify-between mb-4">
                <Skeleton width={"70%"} height={20} />
                <Skeleton width={30} height={25} />
              </div>

              <Skeleton height={140} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
