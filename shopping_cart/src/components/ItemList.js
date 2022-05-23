import "./ItemList.css";
import Item from "./Item";
import Items from "../Data";

export default function ItemList(props) {
  return (
    <>
      <h1>Items</h1>
      <div className="item-list">
        {Items.map((item, index) => {
          return (
            <Item
              name={item.name}
              description={item.description}
              price={item.price}
              addItemsToCart={props.addItemsToCart}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
