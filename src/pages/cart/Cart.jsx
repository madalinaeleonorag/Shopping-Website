import CartItem from "../../components/cart-item/CartItem";
import { CartState } from "../../contexts/cartContext";
import "./Cart.scss";

export const Cart = () => {
  const { cartItems, cartTotalPrice } = CartState();

  return cartItems?.length > 0 ? (
    <div className="cart">
      {cartItems.map((cartItem) => (
        <CartItem item={cartItem} />
      ))}

      <div className="total-price">Total: {cartTotalPrice || 0} RON</div>
    </div>
  ) : (
    <div className="no-items">No items in cart</div>
  );
};

export default Cart;
