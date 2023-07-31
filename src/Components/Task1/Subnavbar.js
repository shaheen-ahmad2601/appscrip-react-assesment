import React from "react";

import "../Task1/Subnavbar.css";

const Subnavbar = (props) => {
  return (
    <div className="subnavbar">
      <div>
        <p className="top-text">Tasks</p>
        <p className=" font-color">Clinical {">"} Tasks</p>
        <button className="btn-1" onClick={()=> props.tabChange(1)}>upcoming</button>
        <button className="btn-2" onClick={()=> props.tabChange(2)}>completed</button>
      </div>
    </div>
  );
};

export default Subnavbar;






