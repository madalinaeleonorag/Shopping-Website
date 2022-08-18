import "./App.scss";
import Header from "./components/header/Header";
import SearchBar from "./components/search/SearchBar";
import ItemsList from "./components/items-list/ItemsList";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  const getSearchValue = (textToSearch) => {
    setData(textToSearch);
  };

  return (
    <>
      <Header />
      <SearchBar setSearchText={getSearchValue} />
      <ItemsList filterText={data} />
    </>
  );
};

export default App;
