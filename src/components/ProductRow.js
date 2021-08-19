const ProductRow = (props) => {
  return (
    <div className="ProductRow" style={props.stocked ? null : { color: "red" }}>
      <div className="name">{props.name}</div>
      <div className="price">{props.price}</div>
    </div>
  );
};
export default ProductRow;
