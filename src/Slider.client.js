import React, { useEffect, useState } from "react";

export default function Slider({slides}){
  const [current, setCurrent] = useState(0);
  const [swipe, setSwipe] = useState("none");
  const [xValues, setXValues] = useState([0, 0, 0])

  function handleSwipe(e) {
    const x = e.touches[0].screenX;
    setXValues(prevXValues => [x, ...prevXValues.slice(0, 2)])
  }

  useEffect(()=> {
    if(xValues[0] > xValues[1] && xValues[1] > xValues[2]) {
      setSwipe("right")
      return
    }
    if(xValues[0] < xValues[1] && xValues[1] < xValues[2]) {
      setSwipe("left")
      return
    }
    setSwipe("none")
  }, [xValues])

  useEffect(() => {
    console.log(swipe)
    if(swipe === "left"){
      setCurrent(c => c === 0 ? slides.length-1 : c-1)
      return
    }
    if(swipe === "right") {
      setCurrent(c => (c+1)%slides.length )
      return
    }
    if(swipe === "none") {
      setXValues([0, 0, 0])
      return
    }
  }, [swipe])

  return (
    <div className='slider' 
      onTouchMove={handleSwipe}
      onTouchMoveCapture={()=>setSwipe("none")}
    >
      {slides.map((slide, index) => {
        return (
          <div className='swiper' key={index}>
            {index === current && (
              <img className='sliderImage' src={slide.image} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
};