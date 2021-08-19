const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <form
        onSubmit={(e) => {
          const inputText = e.target[0].value;
          const inputCheck = e.target[2].checked;
          props.func(inputText, inputCheck);
          e.target[0].value = "";
          e.target[2].checked = false;
          e.preventDefault();
        }}
      >
        <input type="text" />
        <button type="submit">Search</button>
        <div className="checkbox" value={props.inStockOnly}>
          {" "}
          <input type="checkbox" /> <label>Only show products in stock</label>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
