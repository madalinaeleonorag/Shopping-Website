import "./ItemsList.scss";
import products from "../../assets/data.json";
import Card from "../card/Card";

const ItemsList = () => {
  return (
    <>
      <div className="items-list">
        {products.map((product) => {
          return <Card productObject={product} />;
        })}
      </div>
    </>
  );
};

export default ItemsList;
