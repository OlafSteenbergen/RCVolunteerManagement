import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Locations from './components/Locations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Employees from './components/Employees';
import SingleEmployee from './components/SingleEmployee';

function App() {
   const [countEmp, setCountEmp] = useState([]);
   
   function getFromChild(data){
      setCountEmp(data);
   }

return (
   <BrowserRouter>
   <Navbar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Employees' element={<Employees />} />
         <Route path='/Employees/:singleEmp' element={<SingleEmployee />} />
         <Route path='/Locations' element={<Locations />} />
      </Routes>
   <Footer />
   </BrowserRouter>
);
};

export default App;