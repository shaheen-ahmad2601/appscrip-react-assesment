import React from "react";

import "../Task1/Subnavbar.css";

const Subnavbar = () => {
  return (
    <div className="subnavbar">
      <div>
        <p className="top-text">Tasks</p>
        <p className=" font-color">Clinical {">"} Tasks</p>
        <a className="bottom-text" href="#">
          Upcoming Tasks
        </a>
        <a className="bottom-text" href="">
          Completed Tasks
        </a>
      </div>
    </div>
  );
};

export default Subnavbar;



