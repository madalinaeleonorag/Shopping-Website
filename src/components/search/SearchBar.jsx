import "./SearchBar.scss";

const SearchBar = (props) => {
  return (
    <>
      <div className="search">
        <div className="search-bar">
          <img
            src="https://www.pngall.com/wp-content/uploads/8/Magnifying-Glass-Search-PNG-High-Quality-Image.png"
            alt="search icon"
            className="search-bar-icon"
          />
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
