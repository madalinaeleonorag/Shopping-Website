import React, { useContext, useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setState] = useState({
    items: [],
    addItem: (item) => {
      const listOfItems = cartItems;
      listOfItems.items.push(item);
      setState(listOfItems);
      console.log("cartContext cartItems = ", cartItems);
    },
  });

  return (
    <CartContext.Provider value={cartItems}>{children}</CartContext.Provider>
  );
};

export default CartContext;

export const CartState = () => {
  return useContext(CartContext);
};
