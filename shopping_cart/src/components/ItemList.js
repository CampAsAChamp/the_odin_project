import "./ItemList.css";
import Item from "./Item";
import Items from "../Data";

export default function ItemList() {
  // Render each item from Items
  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="item-list">
        {Items.map((item, index) => {
          return (
            <Item
              name={item.name}
              description={item.description}
              price={item.price}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
