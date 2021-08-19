import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import React, { Component } from "react";

class FilterableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }
  handleSubmit = (inputText, inputCheck) => {
    this.setState({ filterText: inputText, inStockOnly: inputCheck });
  };
  render() {
    return (
      <div className="FilterableTable">
        <h1>FilterableTable</h1>
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          func={this.handleSubmit}
        />
        <ProductTable
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
export default FilterableTable;
