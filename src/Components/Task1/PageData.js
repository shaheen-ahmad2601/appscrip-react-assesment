import React from "react";

import "../Task1/PageData.css";

const PageData = ({ appointment }) => {
  const getStatusClassName = () => {
    if (appointment.status === "Overdue") {
      return "status-red";
    } else if (appointment.status === "Upcoming") {
      return "status-green";
    } else {
      return "";
    }
  };

  return (
    <div className="main-div">
      <div className="row-1">
        <div className="sub-section1">
          <img src={appointment.imageSrc} alt="" />
          <div>
            <p className="name-text">{appointment.name}</p>
            <p className="appointment-text">Appointment Id: {appointment.id}</p>
            <p className="name-text intake">{appointment.assessment}</p>
          </div>
        </div>

        <div className="sub-section2">
          <p>Take Id: {appointment.takeId}</p>
          <p>Date and Time: {appointment.dateAndTime}</p>
          <p>Duration: {appointment.duration}</p>
        </div>

        <div className="sub-section3">
          <p>
            Status{" "}
            <span className={getStatusClassName()}>{appointment.status}</span>
          </p>
          <button className="button">Start Assessment</button>
        </div>
      </div>
    </div>
  );
};

export default PageData;
