import "./App.scss";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";

// export const UserContext = React.createContext();

const App = () => {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
};

export default App;
