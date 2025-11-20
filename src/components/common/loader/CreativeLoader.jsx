import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CreativeLoader() {
  return (
    <div className="mb-20">
      {/* Header Section Skeleton */}
      <div className="rounded-xl w-full bg-white p-6 mb-8">
        <div className="mb-4">
          <Skeleton height={30} width={"50%"} />
        </div>
        <Skeleton count={3} />
      </div>

      {/* Upload Box Skeleton */}
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
        <div className="border-2 border-dashed rounded-xl my-6 p-6 w-64 h-48 flex flex-col items-center justify-center bg-white">
          <Skeleton circle width={50} height={50} />
          <Skeleton width={"80%"} className="mt-3" />
          <Skeleton width={"60%"} className="mt-2" />
        </div>

        {/* Images Grid Skeleton */}
        <div className="flex items-center flex-wrap gap-4 mt-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 w-full md:w-72"
            >
              {/* Title + Menu */}
              <div className="flex items-center justify-between mb-4">
                <Skeleton width={"70%"} height={15} />
                <Skeleton width={25} height={25} />
              </div>

              {/* Image area skeleton */}
              <Skeleton height={150} className="rounded" />

              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <Skeleton circle width={32} height={32} />

                <div className="flex items-center gap-3">
                  <Skeleton width={50} height={12} />
                  <Skeleton width={24} height={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
