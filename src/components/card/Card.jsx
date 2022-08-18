import "./Card.scss";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.productObject.image}
          alt={props.productObject.name}
          className="card-image"
        />
        <div className="card-title">{props.productObject.name}</div>
        <div className="card-price">{props.productObject.price} RON</div>
        <button className="card-button">Add to cart</button>
      </div>
    </>
  );
};

export default Card;
