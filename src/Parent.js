import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, sectChildrenColor] = useState("#FFF");

  //Setting function to update state in the parent component to run the div when clicked
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    sectChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color  }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
