import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="title">&#62; Perfumes</div>
        <img
          src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
          alt="cart logo"
          className="cart"
        />
      </div>
    </>
  );
};

export default Header;
