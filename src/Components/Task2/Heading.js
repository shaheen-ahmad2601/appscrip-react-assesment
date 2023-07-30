import React from "react";
import "../Task1/Heading.css";

const Heading = () => {
  return (
    <div className="heading">
        <i class="fa-solid fa-magnifying-glass"></i>
      <input  className="search-tag" type="text" placeholder="search" />
      <input className="date-pick" type="date" />
      <span className="heading__dateSeparator">to</span>
      <input className="date-pick" type="date" />
      <button className="btn-1">Apply</button>
      <button className="btn-2">Reset</button>
      <div> 
        <input
          type="text"
          className="heading__filterBox"
          placeholder="Filter"
        />
      </div>
    </div>
  );
};

export default Heading;
