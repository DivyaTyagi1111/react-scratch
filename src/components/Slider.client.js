import React, { useState } from "react";
// import { SlideImage, StyledSlider } from "./SlideImage.client";
import { useSwipeable } from "react-swipeable";

import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

export default function Slider({slides}){
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handlers = () =>{
      useSwipeable({
          onSwipedLeft: ()=>setCurrent(current === length - 1 ? 0 : current + 1),
          onSwipedRight: ()=>setCurrent(current === 0 ? length - 1 : current - 1)
      })
  }

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

  return (
    <div className='slider' {...handlers}>
      {/* <FaChevronLeft
        className="left-arrow"
        onClick={prevSlide}
      />
      <FaChevronRight
        className="right-arrow"
        onClick={nextSlide}
      /> */}
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img className='sliderImage' src={slide.image} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
};

