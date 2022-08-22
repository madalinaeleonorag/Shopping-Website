import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import CartContext from "../../context/cartContext";
import "./Header.scss";

const Header = () => {
  // TODO
  // const { items } = useContext(CartContext);
  // console.log(items);
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
          {/* <div className="cart-counter">({items})</div> */}
        </Link>
      </div>
    </>
  );
};

export default Header;
