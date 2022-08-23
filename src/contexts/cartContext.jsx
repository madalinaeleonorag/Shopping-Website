import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const addCartItem = (newItem) => {
    setCartItems((currentItemsInCart) => {
      if (
        currentItemsInCart.find((item) => item.name === newItem.name) == null
      ) {
        return [...currentItemsInCart, { ...newItem, quantity: 1 }];
      } else {
        return currentItemsInCart.map((item) => {
          if (item.name === newItem.name) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });

    setTotalItems();
  };

  const setTotalItems = () => {
    let numberOftemsInCart = 0;
    cartItems.forEach((item) => {
      numberOftemsInCart += item.quantity;
    });
    setNumberOfItems(numberOftemsInCart);
  };

  useEffect(() => {
    setTotalItems();
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
