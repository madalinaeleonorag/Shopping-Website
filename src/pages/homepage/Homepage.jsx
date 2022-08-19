import "./Homepage.scss";
import { useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import ItemsList from "../../components/items-list/ItemsList";

export const Homepage = () => {
  const [data, setData] = useState("");

  const getSearchValue = (textToSearch) => {
    setData(textToSearch);
  };

  return (
    <>
      <SearchBar setSearchText={getSearchValue} />
      <ItemsList filterText={data} />
    </>
  );
};

export default Homepage;
