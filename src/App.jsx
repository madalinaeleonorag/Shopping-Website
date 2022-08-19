import "./App.scss";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";

// export const UserContext = React.createContext();

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
