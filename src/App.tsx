// import { Routes, Route } from "react-router-dom"
// import First from "./pages/First.tsx";
// import Second from "./pages/Second"



// const App = () => {
//   const isUserDataAvailable = () => {
//     const userData = localStorage.getItem('userData');
//     return !!userData;
//   };
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<First />} />
//         <Route path="second" element={<Second />} />
//       </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import First from './pages/First.tsx';
import Second from './pages/Second';

const App = () => {
  
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<First />} />
        
        <Route
          path="second"
          element={<Second />}
        />
      </Routes>
    </div>
  );
};

export default App;
