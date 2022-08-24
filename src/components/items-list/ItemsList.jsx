import "./ItemsList.scss";
import products from "../../assets/data.json";
import Card from "../card/Card";

const ItemsList = ({ filterText }) => {
  const showProducts = () => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
      .map((product) => {
        return <Card key={product.name} productObject={product} />;
      });
  };

  return (
    <>
      <div className="items-list">{showProducts()}</div>
    </>
  );
};

export default ItemsList;
