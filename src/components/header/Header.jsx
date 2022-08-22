import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../contexts/cartContext";
import "./Header.scss";

const Header = () => {
  const { items } = CartState();
  const [numberOfItems, setNumberOfItems] = useState(0);
  console.log("numberOfItems = ", numberOfItems);

  useEffect(() => {
    console.log("useEffect items = ", items);
    setNumberOfItems(items?.length);
  }, [numberOfItems]);

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
          <div className="cart-counter">({items.length})</div>
        </Link>
      </div>
    </>
  );
};

export default Header;
