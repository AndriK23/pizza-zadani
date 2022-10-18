import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {

 //const [cartToppings, setCartToppings] = useState(toppings.select)

 //const handleChange = ( index, price) => {
 // const newToppings = [...cartToppings];
 // newToppings[index].price = price;
 // setCartToppings(newToppings)
 // console.log(toppings[2].price)
 //}

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected topping: 0, total price: 0 Euro</p>
        
      <div className="toppings">
        {toppings.map((topping , index) => (
          <Topping topping={topping} key={topping.name}  /> //handleToppingChange = {(price) => handleChange(index,price)}
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
