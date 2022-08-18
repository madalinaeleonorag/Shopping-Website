import "./ItemsList.scss";

const ItemsList = () => {
  return (
    <>
      <div className="items-list">
        <div className="card">
          <img
            src="https://cdn.notinoimg.com/detail_thumb_2k/dior/3348901192231xx_01__16.jpg"
            alt="dior poison perfume"
            className="card-image"
          />
          <div className="card-title">Dior Hypnotic Poison</div>
          <div className="card-price">438 RON</div>
          <button className="card-button">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ItemsList;
