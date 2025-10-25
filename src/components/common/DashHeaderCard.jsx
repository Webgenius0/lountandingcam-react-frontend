import React from "react";

export default function HeaderCard({
  title,
  description,
  image,
  className = "",
}) {
  return (
    <div
      className={`bg-linear-90 from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)] flex flex-col md:flex-row justify-center items-center space-y-3 md:justify-between rounded-xl w-fit px-8 p-4  ${className}`}
    >
      <div className="max-w-xl">
        <h5 className="font-semibold mb-4 text-3xl">{title}</h5>
        <p className="text-gray-500">{description}</p>
      </div>
      {image && (
        <img
          src={image}
          alt="Header Graphic"
          className="max-h-48 ml-6 object-contain"
        />
      )}
    </div>
  );
}
