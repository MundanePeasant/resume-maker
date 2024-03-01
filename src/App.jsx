import { useState } from 'react'
import PersonalForm from './components/PersonalForm'
import PersonalCV from './components/PersonalCV'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import './styles/App.css'

function App() {
  const [header, setHeader] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  function handlePersonalClick (event) {
    event.preventDefault();
    console.log(event);

    setHeader({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value
    })
  }

  return (
    <>
      <div className='screen-container'>
        <div className='forms-container'>
          Header
          <PersonalForm onClick={handlePersonalClick}/>
          Education
          <EducationForm />
          Experience
          <ExperienceForm />
        </div>
        <div className='resume-container'>
          <PersonalCV header={header} />
        </div>
      </div>
    </>
  )
}

export default App;
