import React from "react";
import "../../assets/styles/_SolveFurniture.style.scss";

import solve1 from "../../assets/images/solve1.jpg";
import solve2 from "../../assets/images/solve2.jpg";
import solve3 from "../../assets/images/solve3.jpg";

const furnitureData = [
  {
    image: solve1,
    title: "Fast & free shipping",
    text: "Every single order ships for free. No minimums, no tiers, no fine print whatsoever.",
  },
  {
    image: solve2,
    title: "Modular, easy-to-move design",
    text: "Our innovative modular design is driven by the belief that furniture should fit this home, and the next one.",
  },
  {
    image: solve3,
    title: "Durable, premium materials",
    text: "We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather.",
  },
];

const SolveFurniture = () => {
  return (
    <div className="py-16">
    <div className="solve-section">
      <div className="solve-furniture md:container md:mx-auto py-16 xl:px-12">
        <h1 className="text-center pb-16 font-neucha">
          We’re solving the biggest problems in furniture
        </h1>
        <div className="flex flex-wrap">
          {furnitureData.map((item, index) => (
            <div
              key={index}
              className="flex w-full md:justify-evenly lg:justify-normal md:w-1/2 xl:w-1/3 px-12 md:px-0 lg:px-8 pb-16 xl:pb-0"
            >
              <img src={item.image}
                alt={`Description of the item ${index}`} 
                className="w-20 h-3/4"
              />
              <div className="pl-12">
                <b className="text-base">{item.title}</b>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SolveFurniture;
