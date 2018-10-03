import React from "react";
import { Filters } from "../Constants/actionTypes.js";
import { connect } from "react-redux";
import { setFilter } from "../Actions";
import "./Filter.css";

export const FilterLinks = ({ onClick }) => {
  return (
    <div className="sidebar bg-info">
      <h5 className="text-center text-white">Choose Price Range</h5>
      <span
        href="#"
        className="badge badge-success ml-5"
        onClick={() => onClick(Filters.SHOW_CHEAP)}
      >
        less than ₹10,000
      </span>
      <span
        href="#"
        className="badge badge-warning ml-5"
        onClick={() => onClick(Filters.SHOW_AFFORDABLE)}
      >
        ₹10,000 to ₹20,000
      </span>
      <span
        href="#"
        className="badge badge-danger ml-5"
        onClick={() => onClick(Filters.SHOW_EXPENSIVE)}
      >
        greater than ₹20,000
      </span>
      <button
        className="btn btn-primary ml-5 my-2"
        onClick={() => onClick(Filters.SHOW_ALL)}
      >
        SHOW All
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: filter => {
      dispatch(setFilter(filter));
    }
  };
};

const Filter = connect(
  null,
  mapDispatchToProps
)(FilterLinks);

export default Filter;
