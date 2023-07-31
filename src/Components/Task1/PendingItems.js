import React, { useState } from "react";
import Heading from "./Heading";
import PageData from "./PageData";

function PendingItems() {
    const data1 = [
      {
        id: 324424,
        name: "Malenie Laurent",
        assessment: "Intake comprehensive Assessment",
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHR7l_LtGTVDL1UMAqxmUttnHdEpwEuROHg&usqp=CAU",
        takeId: 232343,
        dateAndTime: "December 22, 2022 10:30 am",
        duration: "1 hour",
        status: "Overdue",
      },
      {
        id: 7665856,
        name: "Malenie Laurent",
        assessment: "Intake comprehensive Assessment",
        imageSrc:
          "https://thumbs.dreamstime.com/z/portrait-serious-old-business-woman-looking-camera-grey-serious-old-businesswoman-100346578.jpg",
        takeId: 232343,
        dateAndTime: "December 22, 2022 10:30 am",
        duration: "1 hour",
        status: "Upcoming",
      },
      {
        id: 7665856,
        name: "Malenie Laurent",
        assessment: "Intake comprehensive Assessment",
        imageSrc:
          "https://cdn.xxl.thumbs.canstockphoto.com/nice-smiling-old-woman-on-the-green-leaves-background-picture_csp22073615.jpg",
        takeId: 232343,
        dateAndTime: "December 22, 2022 10:30 am",
        duration: "1 hour",
        status: "Overdue",
      },
  
    ];
  
    return (
      <>
        <Heading />
        {data1.map((appointment) => (
          <PageData key={appointment.id} appointment={appointment} />
        ))}
      </>
    );
  }

  export default PendingItems;

