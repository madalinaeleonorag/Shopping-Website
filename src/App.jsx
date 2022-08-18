import "./App.scss";

function App() {
  return (
    <div>
      <div className="header">
        <div className="title">Perfumes</div>
        <div className="cart">Cart</div>
      </div>

      <div className="searchbar">
        <img
          src="./assets/icons/search.png"
          alt="search icon"
          className="search-icon"
        />
        <input type="text" className="search-input" />
      </div>

      <div className="items-list">
        <div className="card">
          <img
            src="./assets/images/dior-poison.jpeg"
            alt="dior poison perfume"
            className="card-image"
          />
          <div className="card-title">Dior Hypnotic Poison</div>
          <div className="card-price">438 RON</div>
          <button className="card-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
