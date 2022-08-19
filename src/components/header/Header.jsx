import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="title">&#62; Perfumes</div>
        </Link>
        <Link to="cart">
          <img
            src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
            alt="cart logo"
            className="cart"
          />
        </Link>
      </div>
    </>
  );
};

export default Header;
