import React, { useState } from "react";
import Check from "../Check";
import './style.css';


//handleToppingChange prop
const Topping = ({ topping, onSelectChange }) => {

  //prvni predani => funkcni
  //const [checked, setChecked] = useState(false);
  //const handleClick = (newValue) => {
  //  setChecked(newValue)
  //  console.log(newValue)
  //}

  return (
    <div className="topping">
      <Check checked = {topping.selected} onChange = {onSelectChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
