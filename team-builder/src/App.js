
import React, {useState} from "react"
import './App.css';
import Forms from "./Forms.js"
import Employees from './Employees.js'


function App() {

const [emps, setEmps]= useState([])

const addNewEmp = (emp) => {
  const newEmp = {
    id: Date.now(),
    name: emp.name,
    email: emp.email,
    role: emp.role
  };

  setEmps([...emps, newEmp]);
}

  return (
    <div className="App">

      <Forms addNewEmp={addNewEmp}/>
      <Employees data={emps}/>
      
    </div>
  );
}

export default App;
