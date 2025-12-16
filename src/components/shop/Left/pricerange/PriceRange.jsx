import React from 'react'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from 'react';
const PriceRange = () => {
   const [value, setValue] = useState([30, 60]);
  return (
    <div>
      <h2 className='pb-3'>PRICE RANGE</h2>
      <RangeSlider
        id="range-slider-ab"
        className="margin-lg"
        step={"any"}
        rangeSlideDisabled={true}
      />
    </div> 
  )
}

export default PriceRange