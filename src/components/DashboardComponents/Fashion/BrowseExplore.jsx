import React from "react";

export default function BrowseExplore() {
  const brands = [
    {
      id: 1,
      name: "H&M",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
      url: "https://www.hm.com/",
    },
    {
      id: 2,
      name: "ZARA",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
      url: "https://www.zara.com/",
    },
  ];

  return (
    <section className="bg-white border rounded-2xl my-6 p-6">
      <h2 className="text-xl font-semibold mb-2">Browse & Explore</h2>
      <p className="text-gray-500 mb-6 text-sm">
        When you click on a link, it opens the brand’s website in a new tab so
        you can save freely while staying connected to your Beaute account.
      </p>

      <div className="flex flex-wrap gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="border rounded-xl overflow-hidden p-1 space-y-4 shadow-sm hover:shadow-md transition bg-gray-50"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-52 h-36 rounded-xl object-cover"
            />
            <div className="flex flex-col gap-4  items-start p-3">
              <img src={brand.logo} alt="" className="h-8 mb-2" />
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm underline"
              >
                {brand.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
