import "./ItemsList.scss";
import products from "../../assets/data.json";

const ItemsList = () => {
  return (
    <>
      <div className="items-list">
        {products.map((product) => {
          return (
            <div className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-image"
              />
              <div className="card-title">{product.name}</div>
              <div className="card-price">{product.price} RON</div>
              <button className="card-button">Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemsList;
