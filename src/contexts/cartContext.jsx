import React, { useContext, useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setState] = useState([]);

  const setCartItems = (item) => {
    const listOfItems = cartItems;
    listOfItems.push(item);
    setState(listOfItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const CartState = () => {
  return useContext(CartContext);
};
