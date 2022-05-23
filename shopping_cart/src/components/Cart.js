import CartItem from "./CartItem";

export default function Cart(props) {
  const { cart, itemLookup, incrementItemInCart, decrementItemInCart, removeItemFromCart, calculateNumItemsInCart } = props;

  function calculateTotal() {
    let priceTotal = 0;
    for (const [itemName, quantity] of cart) {
      let item = itemLookup.get(itemName);
      priceTotal = priceTotal + item.price * quantity;
    }

    return priceTotal
  }


  return (
    <div className="cart">
      <h1>Cart</h1>
      <h2>Items: </h2>
      <div className="item-list">
        {[...cart.keys()].map((key) => {
          const item = itemLookup.get(key);
          return (
            <CartItem
              name={item.name}
              quantity={cart.get(item.name)}
              price={item.price}
              incrementItemInCart={incrementItemInCart}
              decrementItemInCart={decrementItemInCart}
              removeItemFromCart={removeItemFromCart}
              key={key}
            />
          );
        })}
      </div>
      <h2>Num Items: {calculateNumItemsInCart()}</h2>
      <h2>Total: ${calculateTotal()}</h2>
      <button>Checkout</button>
    </div>
  );
}
