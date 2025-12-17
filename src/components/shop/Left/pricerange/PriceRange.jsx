import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
const PriceRange = () => {
  const priceRanges = [
    { label: "All Price", value: "all" },
    { label: "Under $20", value: "under_20" },
    { label: "$25 to $100", value: "25_100" },
    { label: "$100 to $300", value: "100_300" },
    { label: "$300 to $500", value: "300_500" },
    { label: "$500 to $1,000", value: "500_1000" },
    { label: "$1,000 to $10,000", value: "1000_10000" },
  ];

  const [value, setValue] = useState([30, 60]);
  return (
    <div>
      <h2 className="pb-3">PRICE RANGE</h2>
      <RangeSlider
        id="range-slider-ab"
        className="margin-lg"
        step={"any"}
        rangeSlideDisabled={true}
      />
      <div className="mt-5">
        <button className="py-1 border mr-4 px-5 cursor-pointer">
          Min Price
        </button>
        <button className="py-1 border px-5 cursor-pointer">Max Price</button>
      </div>
      <div className=" space-y-3 mt-5"> 
        {priceRanges.map((item) => (
          <label key={item.value} className="flex body_sm_500 items-center gap-2">
            <input className="w-5 h-5 bg-primary-500" type="radio" name="price" value={item.value} />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceRange;
