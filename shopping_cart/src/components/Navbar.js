import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar">
      <a href="http://localhost:3000/">
        <button>Home</button>
      </a>
      <a href="http://localhost:3000/items">
        <button>View Items</button>
      </a>
      {/* Display the number of items currently in the cart next to the cart button */}
      <a href="http://localhost:3000/cart">
        <button>Cart</button>
      </a>
    </div>
  );
}
