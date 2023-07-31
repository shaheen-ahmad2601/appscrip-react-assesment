import React, { useState } from "react";
import Heading from "./Heading";
import PageData from "./PageData";

function CompletedItems() {
  const data1 = [
    {
      id: 324424,
      name: "Morf Harrison",
      assessment: "complete comprehensive Assessment tesh",
      imageSrc:
        "https://media.istockphoto.com/id/489582907/photo/portrait-of-happy-senior-woman.jpg?s=612x612&w=0&k=20&c=QiNzRiXqTb6CwhTZcKB6BNeeteznYCCyDE8guJpv4Ds=",
      takeId: 23234343435,
      dateAndTime: "December 22, 2022 10:30 am",
      duration: "1 hour",
      // status: "",
    },
    {
      id: 76835454354356,
      name: "Marie gardinan",
      assessment: "Intake comprehensive Assessment",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz9RPAyUfk_yrEOs5VT-7RVng8Qy7u4c02Cv326poKdHtZMyWcKpIf_7tTJCbDgYS_D0&usqp=CAU",
      takeId: 232343243343,
      dateAndTime: "December 22, 2022 10:30 am",
      duration: "3 hour",
      // status: "",
    },
    {
      id: 766583423425256,
      name: "zang dSuza",
      assessment: "Intake comprehensive Assessment",
      imageSrc:
        "https://img.freepik.com/free-photo/close-up-portrait-senior-woman_23-2149207234.jpg?w=2000",
      takeId: 232332432443,
      dateAndTime: "December 22, 2022 10:30 am",
      duration: "2 hour",
      // status: "",
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

export default CompletedItems;
