import { useState } from "react";
import "./Item.css";

export default function Item(props) {
  const [quantity, setQuantity] = useState(1);
  const { name, description, price, addItemsToCart } = props;

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <div className="quantity-bar">
        <button onClick={decrement}>-</button>
        <p>{quantity}</p>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => addItemsToCart(name, quantity)}>Add to cart</button>
    </div>
  );
}
