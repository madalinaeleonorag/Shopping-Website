import { CartState } from "../../contexts/cartContext";
import { ADD_TO_CART, RON } from "../../assets/copy";
import "./Card.scss";

const Card = ({ productObject }) => {
  const { addCartItem } = CartState();

  return (
    <>
      <div className="card">
        <img
          src={productObject.image}
          alt={productObject.name}
          className="card-image"
        />
        <div className="card-title">{productObject.name}</div>
        <div className="card-price">
          {productObject.price} {RON}
        </div>
        <button
          className="card-button"
          onClick={() => {
            addCartItem(productObject);
          }}
        >
          {ADD_TO_CART}
        </button>
      </div>
    </>
  );
};

export default Card;
