import React from "react";
import { CartState } from "../../contexts/cartContext";
import "./Card.scss";

const Card = ({ productObject }) => {
  const { setCartItems } = CartState();

  return (
    <>
      <div className="card">
        <img
          src={productObject.image}
          alt={productObject.name}
          className="card-image"
        />
        <div className="card-title">{productObject.name}</div>
        <div className="card-price">{productObject.price} RON</div>
        <button
          className="card-button"
          onClick={() => {
            setCartItems(productObject);
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Card;
