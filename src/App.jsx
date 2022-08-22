import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import "./App.scss";

const App = () => {
  const [cartItems, setState] = useState({
    items: [],
    addItem: (item) => {
      const listOfItems = cartItems;
      listOfItems.items.push(item);
      setState(listOfItems);
      console.log(cartItems);
    },
  });

  return (
    <>
      <CartProvider value={cartItems}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
