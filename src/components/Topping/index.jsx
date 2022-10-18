import React, { useState } from "react";
import Check from "../Check";
import './style.css';


//handleToppingChange prop
const Topping = ({ topping }) => {

  const [checked, setChecked] = useState(false);

  //new
  //const handleChange = (newChecked) => {
  //  setChecked(newChecked)
  //  console.log(checked)
  //}

  const handleClick = (newValue) => {
    setChecked(newValue)
    console.log(newValue)
  }

  return (
    <div className="topping">
      <Check value = {checked} onClick = {handleClick} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
