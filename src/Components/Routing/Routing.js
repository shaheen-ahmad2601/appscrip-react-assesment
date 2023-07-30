// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
// import Navbar from '../Task1/Navbar';
// import Subnavbar from '../Task1/Subnavbar';
// import Sidebar from '../Task1/Sidebar';
// import PageData from '../Task1/PageData';
// import Heading from '../Task1/Heading';

// const Routing = () => {
//   const navigate = useNavigate();

//   const showAllComponents = () => {
//     // Use the `navigate` function to navigate to "/all-components"
//     navigate('/all-components');
//   };

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             {/* Instead of using <Link>, call the showAllComponents function */}
//             <button onClick={showAllComponents}>Show All Components</button>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// const AllComponents = () => {
//   return (
//     <>
//       <Navbar />
//       <Subnavbar />
//       <Sidebar />
//       <Heading />
//       <PageData />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Routing />}>
//           <Route index element={<h1>Home Page</h1>} />
//           <Route path="/all-components" element={<AllComponents />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
