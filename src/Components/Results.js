import React from "react";
import Compare from "./Compare";
import "./Results.css";

const Results = ({ closeNav, products }) => {
  return (
    <div id="mySidenav" className="sideCompare">
      <a
        href="javascript:void(0)"
        className="results closebtn"
        onClick={closeNav}
      >
        &times;
      </a>
      <h2 className="results text-info">Comparison Results</h2>
      <Compare products={products} />
    </div>
  );
};

export default Results;
