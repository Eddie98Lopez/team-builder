import React from "react"

function Employees (props) {

    return(

        <div className='empSec'>
      {props.data.map(emp => (
        <div key={emp.id} className='emp'>
            <h2>{emp.name}</h2>
            <h4>{emp.email}</h4>
            <h4>{emp.role}</h4>
        </div>
      ))}
    </div>
    )
}

export default Employees 