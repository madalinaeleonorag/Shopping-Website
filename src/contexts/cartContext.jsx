import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const addCartItem = (item) => {
    const listOfItems = cartItems;
    listOfItems.push(item);
    setCartItems(listOfItems);
    setNumberOfItems(listOfItems.length);
  };

  useEffect(() => {
    setNumberOfItems(cartItems.length);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addCartItem, numberOfItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const CartState = () => {
  return useContext(CartContext);
};
