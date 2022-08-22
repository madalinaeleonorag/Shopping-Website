import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../contexts/cartContext";
import "./Header.scss";

const Header = () => {
  const { cartItems } = CartState();
  const [numberOfItems, setNumberOfItems] = useState(0);
  console.log("numberOfItems = ", numberOfItems);
  console.log("cartItems = ", cartItems);

  useEffect(() => {
    console.log("useEffect cartItems = ", cartItems);
    setNumberOfItems(cartItems?.length);
  }, [numberOfItems, cartItems]);

  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="title">&#62; Perfumes</div>
        </Link>
        <Link to="cart" className="cart">
          <img
            src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
            alt="cart logo"
            className="cart-logo"
          />
          <div className="cart-counter">({cartItems?.length})</div>
        </Link>
      </div>
    </>
  );
};

export default Header;
