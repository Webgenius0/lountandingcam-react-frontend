import React from "react";
import ClearSvg from "../../svg/ClearSvg";
import girlImg from "../../../assets/Img/blackGirlImg.png";

export default function FavoritesStyle() {
  const favorites = Array(6).fill({
    id: 1,
    name: "LIMITED EDITION REVERSIBLE JACKET",
    price: "$319.00",
    image: girlImg,
  });

  return (
    <section className="bg-white border rounded-2xl p-6 ">
      <h2 className="text-xl font-semibold mb-4">
        Your Favorites Fashion Style
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {favorites.map((item, index) => (
          <div
            key={index}
            className="relative border rounded-xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-md transition"
          >
            <button className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300">
              <ClearSvg />
            </button>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-3 text-left">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {item.name}
              </h3>
              <p className="text-gray-600 font-semibold mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
