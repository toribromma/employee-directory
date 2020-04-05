import React, {useEffect, useState} from 'react';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import { EmployeeContext } from "./utils/employeeContext"
import {getEmployees} from "./utils/api";
import Table from "./components/Table";


function App() {
  const [employees, setEmployees] = useState([]);
  const [displayedEmployees, setDisplayedEmployees] = useState([])

  useEffect(()=> {
  
    getEmployees().then(employees => {
      setEmployees(employees)
      setDisplayedEmployees(employees)
    });
  }, []);

  return (
    <div>
       <EmployeeContext.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
      <Navbar />
      <Wrapper>
        <Table/>
      </Wrapper>
      <Footer />
      </EmployeeContext.Provider>
    </div>
  );
}


export default App;
