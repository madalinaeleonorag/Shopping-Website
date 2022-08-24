import { QUANTITY, RON } from "../../assets/copy";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-left">
          <div
            className="cart-item-left-image"
            style={{ backgroundImage: "url(" + item.image + ")" }}
          ></div>
          <div className="cart-item-left-name">{item.name}</div>
        </div>
        <div className="cart-item-right">
          <div className="cart-item-right-quantity">
            {QUANTITY}: {item.quantity}
          </div>
          <div className="cart-item-right-price">
            {item.price} {RON}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
