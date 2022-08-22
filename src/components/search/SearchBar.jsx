import "./SearchBar.scss";
import SearchLogo from "../../assets/icons/search.png";

const SearchBar = (props) => {
  return (
    <>
      <div className="search">
        <div className="search-bar">
          <img src={SearchLogo} alt="search icon" className="search-bar-icon" />
          <input
            type="text"
            className="search-bar-input"
            onChange={() => {
              props.setSearchText(event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
