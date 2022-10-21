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
 let toppingsPriceTotal = 0;
 
 cartToppings
  .filter( (ingredience) => ingredience.selected === true )
  .forEach((e) => toppingsCount += 1 );

  cartToppings
  .filter( (ingredience) => ingredience.selected === true )
  .forEach((toppingsPrice) => toppingsPriceTotal +=  toppingsPrice.price );




  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected topping: {toppingsCount}, total price: {toppingsPriceTotal} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping , index) => (
          <Topping topping={topping} key={topping.name} onSelectChange = {(selected) => handleSelectChange(index,selected)} /> //
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
