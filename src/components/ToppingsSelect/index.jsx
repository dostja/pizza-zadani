import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const [pizzaToppings, setPizzaToppings] = useState(toppings);
  let totalPrice = 0;

  const handleChange = (index) => {
    const addTopping = [...toppings];
    addTopping[index].selected = !pizzaToppings[index].selected;
    setPizzaToppings(addTopping);
  };
  const selectedNewToppings = pizzaToppings.filter(
    (topping) => topping.selected
  );

  selectedNewToppings.forEach((topping) => (totalPrice += topping.price));

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings:{selectedNewToppings.length}, total price:
        {totalPrice} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onSelectChange={() => handleChange(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
