import './App.css';
import React, {useState, useEffect} from 'react'
import TeamMember from './TeamMember'

function App() {

  const [id, setId] = useState(1)

  const initialCredentials = {
    name: '',
    email: '',
    role: '',
    id: id
  }

  const [form,setForm] = useState(initialCredentials)
  const [team,setTeam] = useState([])
  
  useEffect(()=>{
    setId(id+1)
  },[team])


  const onChange = (e)=>{
    const {name,value} = e.target
    setForm({...form, [name]:value})
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    setTeam([...team,form])
    console.log(form)
    setForm(initialCredentials)
  }
  return (
    <div className="App">

      <form onSubmit={onSubmit}>
        <input
        name='name'
        type='text'
        onChange={onChange}
        value={form.name}
        placeholder='Name'
        />

        <input
        name='email'
        type='text'
        onChange={onChange}
        value={form.email}
        placeholder='Email'
        />

        <select value={form.role} name='role' onChange={onChange} placeholder='Role'>
          <option>----Select Role-----</option>
          <option>Student</option>
          <option>Teacher</option>
          <option>Jr Developer</option>
        </select>
        
        <button>Submit</button>

      </form>

      <div>
        {team.map( item => <TeamMember member={item} key={item.id}/> )}
      </div>
      
    </div>
  );
}

export default App;
