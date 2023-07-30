// import React from "react";
// import "./PageData.css"

// const PageData = () => {
//   return (
//     <div className="main-div">
//       <div className="row-1">
//         <div className="sub-section1">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHR7l_LtGTVDL1UMAqxmUttnHdEpwEuROHg&usqp=CAU"
//             alt=""
//           />
//          <div>
//          <p className="name-text">Malenie Laurent</p>
//           <p className="appointment-text">Appointment Id:324424</p>
//           <p className="name-text intake" >Intake comprehensiv Assesment</p>
//          </div>
//         </div>

//         <div className="sub-section2">
//           <p>Take Id</p>
//           <p>Date and Time</p>
//           <p>Duration</p>
//         </div>

//         <div className="sub-section3">
//           <p>232343</p>
//           <p>December 22, 2022 10:30 am</p>
//           <p>1 hour</p>
//         </div>

//         <div className="sub-section4">
//           <p>
//             Status <span>Overdue</span>
//           </p>
//           <button>Start Assesment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageData;




import React from 'react';

import "../Task1/PageData.css"

const PageData = ({ appointment }) => {
    const getStatusClassName = () => {
      if (appointment.status === 'Overdue') {
        return 'status-red';
      } else if (appointment.status === 'Upcoming') {
        return 'status-green';
      } else {
        return '';
      }
    };
  
    return (
      <div className='main-div'>
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
              Status <span className={getStatusClassName()}>{appointment.status}</span>
            </p>
            <button className='button'>Start Assessment</button>
          </div>
        </div>
      </div>
    );
  };

  export default PageData
  

