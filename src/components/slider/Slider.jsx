import React, { useEffect, useState } from "react";
import "./slider.css";

import kid from "../../assets/family/kidB.jpg";
import friends1 from "../../assets/friends/friends1.jpg";
export default function Slider() {
  const [index, setIndex] = useState(0);
  let arr = [kid, friends1];
  useEffect(() => {
    setTimeout(() => {
      if (index == arr.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
  });

  return (
    <>
      <div className="slider-images">
        <img src={arr[index]} />
      </div>
    </>
  );
}
