import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Items from "./Data";

function App() {
  function populateItemMap() {
    const itemLookup = new Map();

    Items.forEach((item) => {
      itemLookup.set(item.name, item);
    });

    return itemLookup;
  }

  const itemLookup = populateItemMap();

  const [cart, setCart] = useState(new Map());

  const printCart = () => {
    console.log(cart);
  };

  const addItemsToCart = (itemName, quantity) => {
    const newCart = new Map(cart);

    const currentQty = cart.get(itemName) || 0;
    const newQty = currentQty + quantity;

    newCart.set(itemName, newQty);
    setCart(newCart);

    console.log("Adding ", quantity, itemName);
  };

  const removeItemFromCart = (itemName) => {
    const newCart = new Map(cart);

    newCart.delete(itemName);
    setCart(newCart);

    console.log("Removing ", itemName);
  };

  function incrementItemInCart(itemName) {
    addItemsToCart(itemName, 1);
  }

  function decrementItemInCart(itemName) {
    const currentQty = cart.get(itemName) || 0;

    if (currentQty > 1) {
      const newQty = currentQty - 1;

      const newCart = new Map(cart);
      newCart.set(itemName, newQty);

      setCart(newCart);
    }
    else {
      const newCart = new Map(cart);
      newCart.delete(itemName);

      setCart(newCart);
    }
  }

  function calculateNumItemsInCart() {
    let numItems = 0
    for (let itemQuantity of cart.values()) {
      numItems += itemQuantity;
    }

    return numItems
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} calculateNumItemsInCart={calculateNumItemsInCart} printCart={printCart} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemList addItemsToCart={addItemsToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                itemLookup={itemLookup}
                incrementItemInCart={incrementItemInCart}
                decrementItemInCart={decrementItemInCart}
                removeItemFromCart={removeItemFromCart}
                calculateNumItemsInCart={calculateNumItemsInCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
