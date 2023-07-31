import React from "react";
import "../Task1/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Logo</span>
        <span className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">Patience</a>
          <a href="#">Human Resources</a>
          <a className="clinical" href="#">
            Clinical{" "}
          </a>
          {/* <a href="#">Clinical </a> */}
          <a href="#">Billing</a>
          <a href="#">Reports</a>
        </span>
      </div>
      <div className="navbar-right">
        <span className="nav-icons">
          <span className="checked-in">Cecked-In</span>
          <i className="fa fa-question-circle" aria-hidden="true"></i> 
          <i className="fa fa-bell" aria-hidden="true"></i>{" "}
          <span className="nav-account">Account</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;





