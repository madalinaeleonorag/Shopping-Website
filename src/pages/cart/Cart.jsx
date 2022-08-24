import { CartState } from "../../contexts/cartContext";
import CartItem from "../../components/cart-item/CartItem";
import "./Cart.scss";
import { NO_ITEMS, RON, TOTAL } from "../../assets/copy";

export const Cart = () => {
  const { cartItems, cartTotalPrice } = CartState();

  const showCartItems = () => {
    return cartItems.map((cartItem) => (
      <CartItem key={cartItem.name} item={cartItem} />
    ));
  };

  return cartItems?.length > 0 ? (
    <div className="cart">
      {showCartItems()}

      <div className="total-price">
        {TOTAL}: {cartTotalPrice || 0} {RON}
      </div>
    </div>
  ) : (
    <div className="no-items">{NO_ITEMS}</div>
  );
};

export default Cart;
