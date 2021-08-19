import data from "../data";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
  return (
    <div className="ProductTable">
      <div className="title">
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      <div className="content">
        <h3 className="category">Sporting Goods</h3>
        {data.map((item, index) => {
          if (
            props.inStockOnly
              ? !(props.inStockOnly && item.stocked === props.inStockOnly)
              : null
          ) {
            return null;
          }
          if (
            item.category === "Sporting Goods" &&
            item.name.toLowerCase().includes(props.filterText.toLowerCase())
          ) {
            return (
              <ProductRow
                key={index}
                category={item.category}
                price={item.price}
                stocked={item.stocked}
                name={item.name}
              />
            );
          } else return null;
        })}
        <h3 className="category">Electronics</h3>
        {data.map((item, index) => {
          if (
            props.inStockOnly
              ? !(props.inStockOnly && item.stocked === props.inStockOnly)
              : null
          ) {
            return null;
          }
          if (
            item.category === "Electronics" &&
            item.name.toLowerCase().includes(props.filterText.toLowerCase())
          ) {
            return (
              <ProductRow
                key={index}
                category={item.category}
                price={item.price}
                stocked={item.stocked}
                name={item.name}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
};
export default ProductTable;
