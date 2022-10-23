import React from "react";
import Check from "../Check";
import "./style.css";

const Topping = ({ topping, onSelectChange }) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onSelectChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
