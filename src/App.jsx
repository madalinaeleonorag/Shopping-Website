import "./App.scss";
import Header from "./components/header/Header";
import SearchBar from "./components/search/SearchBar";
import ItemsList from "./components/items-list/ItemsList";

const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <ItemsList />
    </>
  );
};

export default App;
