import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {

 const [cartToppings, setCartToppings] = useState(toppings)

 const handleSelectChange = ( index, selected) => {
 const newToppings = [...cartToppings];
 newToppings[index].selected = selected;
 setCartToppings(newToppings)
 //console.log(toppings[2].selected)
 //console.log(newToppings)
 
 }

 let toppingsCount = 0;
 cartToppings.forEach((toppings) => toppingsCount += toppings.selected );

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected topping: {toppingsCount}, total price: {toppingsPrice} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping , index) => (
          <Topping topping={topping} key={topping.name} onSelectChange = {(selected) => handleSelectChange(index,selected)} /> //
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
