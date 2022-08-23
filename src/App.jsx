import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import "./App.scss";

const App = () => {
  return (
    <>
      <CartProvider>
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
