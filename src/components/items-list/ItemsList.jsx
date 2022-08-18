import "./ItemsList.scss";
import products from "../../assets/data.json";
import Card from "../card/Card";

const ItemsList = (props) => {
  return (
    <>
      <div className="items-list">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(props.filterText.toLowerCase())
          )
          .map((product) => {
            return <Card productObject={product} />;
          })}
      </div>
    </>
  );
};

export default ItemsList;
