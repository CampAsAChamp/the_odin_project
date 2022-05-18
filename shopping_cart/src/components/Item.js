import "./Item.css";

export default function Item(props) {
  const { name, description, price } = props;
  return (
    <div className="item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button>Add to cart</button>
    </div>
  );
}
