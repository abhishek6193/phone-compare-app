import React from "react";

import { Filters } from "../Constants/actionTypes";

const Search = ({ onChange }) => {
  return (
    <input
      className="form-control mr-sm-2"
      style={{ width: "300px" }}
      id="search"
      type="text"
      placeholder="Search By Product Name"
      aria-label="Search"
      onChange={() => onChange(Filters.SEARCH_PRODUCT)}
    />
  );
};

export default Search;
