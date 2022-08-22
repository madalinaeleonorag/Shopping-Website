import { CartState } from "../../contexts/cartContext";
import "./Cart.scss";

export const Cart = () => {
  const { cartItems } = CartState();

  console.log("cartItems = ", cartItems);
  return <></>;
};

export default Cart;
