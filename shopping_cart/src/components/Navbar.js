// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  const { calculateNumItemsInCart } = props

  return (
    <nav id="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/items">
        <button>View Items</button>
      </Link>
      <Link to="/cart">
        <button>Cart {calculateNumItemsInCart()}</button>
      </Link>
      <button onClick={props.printCart}>Print Cart</button>
    </nav>
  );
}
