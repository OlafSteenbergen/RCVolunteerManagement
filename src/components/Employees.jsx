import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import EmployeeCount from './EmployeeCount';
import Title from './Title';

function Employees() {
    const [results, setResults] = useState([]);
    const [countEmp, setCountEmp] = useState([]);
 
    function getFromChild(data){
       setCountEmp(data);
    }
 
 return (
       <div>
          <EmployeeCount countEmp = {countEmp}/>
          <Title getFromChild={getFromChild} />
       </div>
 );
 };

export default Employees