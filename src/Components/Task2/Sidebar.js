// Sidebar.js

import React from 'react';
import '../Task1/Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dropdown">
        <button className="dropbtn">Add Clinical</button>
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      <div className="section">
        <span className="section-header">Appointment</span>
      </div>
      <div className="section">
        <i className="logo fa fa-tasks"></i>
        <span className="section-header">Tasks</span>
      </div>
    </div>
  );
};

export default Sidebar;
