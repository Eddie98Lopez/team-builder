import React,{useState} from 'react';
import ReactDOM from 'react-dom';

function Forms(props) {

const [emp, setEmp]=useState({
    name: "",
    email: "",
    role:"",
})

const handleChange = e => {

    setEmp({...emp, name:e.target.value})
}
const handleChangeEmail = e => {

    setEmp({...emp, email:e.target.value})
}
const handleChangeRole = e => {

    setEmp({...emp, role:e.target.value})
}

const submit = (e)=>{
    e.preventDefault();
    props.addNewEmp(emp)
    document.getElementById("form").reset();
   
}

    return (
      <div>
          <form onSubmit={submit} id="form">

              <label htmlFor="name">
                  <input 
                  id="name" 
                  placeholder='name' 
                  type='text'
                  onChange={handleChange}></input>
              </label> <br/>

              <label htmlFor="email">
                  <input 
                  id="email" 
                  placeholder='email' 
                  type='text'
                  onChange={handleChangeEmail}></input>
              </label>

              <label htmlFor='role'>
                  <input id='role' 
                  placeholder='Role' 
                  type='text'
                  onChange={handleChangeRole}></input>
              </label>

              <button type="submit, reset" >Add Employee</button>

          </form>


        
      </div>
    );
  }
  
  export default Forms;