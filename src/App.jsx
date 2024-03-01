import { useState } from 'react'
import PersonalForm from './components/PersonalForm'
import PersonalCV from './components/PersonalCV'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import './styles/App.css'
import Education from './components/Education'
import EducationCV from './components/EducationCV'

function App() {
  //state for the header section
  const [header, setHeader] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  function handlePersonalClick (event) {
    event.preventDefault();

    setHeader({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value
    })
  }

  //state for education
  const [edu, setEdu] = useState([]);

  function handleEducationClick (event) {
    event.preventDefault();
    const school = document.getElementById("school").value;
    const location = document.getElementById("location").value;
    const study = document.getElementById("study").value;
    const start = document.getElementById("start-date-edu").value;
    const end = document.getElementById("end-date-edu").value;
    
    const education = new Education(school, location, study, start, end);
    setEdu(edu => [...edu, education])
  }

  return (
    <>
      <div className='screen-container'>
        <div className='forms-container'>
          Header
          <PersonalForm onClick={handlePersonalClick}/>
          Education
          <EducationForm onClick={handleEducationClick}/>
          Experience
          <ExperienceForm />
        </div>
        <div className='resume-container'>
          <PersonalCV header={header} />
          <EducationCV education={edu}/>
        </div>
      </div>
    </>
  )
}

export default App;
