import { useState } from "react";
import "./Item.css";

export default function CartItem(props) {
    const { name, quantity, price, incrementItemInCart, decrementItemInCart, removeItemFromCart } = props;
    const [currQuantity, setCurrQuantity] = useState(quantity);

    const increment = () => {
        setCurrQuantity(currQuantity + 1);

        incrementItemInCart(name)
    };

    const decrement = () => {
        if (currQuantity > 0)
            setCurrQuantity(currQuantity - 1);

        decrementItemInCart(name)
    };

    return (
        <div className="item">
            <h3>{name}</h3>
            <p>${price}</p>
            <div className="quantity-bar">
                <button onClick={decrement}>-</button>
                <p>{currQuantity}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => { removeItemFromCart(name) }}>Trash</button>
        </div>
    );
}
