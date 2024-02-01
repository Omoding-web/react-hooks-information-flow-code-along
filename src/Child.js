import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor)
  }
 // console.log(onChangeColor);
  return (
    //Use onChangeColor as event handler to allow for color change onClick as a prop
  <div onClick={handleClick}
  className="child" 
  style={{ backgroundColor: color }} 
  />
);
}

export default Child;
