import { useState } from 'react'
import PersonalForm from './components/PersonalForm'
import PersonalCV from './components/PersonalCV'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import './styles/App.css'
import Education from './components/Education'
import Experience from './components/Experience'
import EducationCV from './components/EducationCV'
import ExperienceCV from './components/ExperienceCV'

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

    const form = document.getElementsByClassName("personal-form")[0].firstChild;
    form.reset();
  }

  //state for education
  let replace = null;
  const [edu, setEdu] = useState([]);
  function handleEducationClick (event) {
    event.preventDefault();
    const school = document.getElementById("school").value;
    const location = document.getElementById("location-edu").value;
    const study = document.getElementById("study").value;
    const start = document.getElementById("start-date-edu").value;
    const end = document.getElementById("end-date-edu").value;
    
    const education = new Education(school, location, study, start, end);

    if(replace){
      console.log("inside the if statement");
      const index = edu.findIndex(obj => obj.id === replace.id);

      const updatedEdu = [...edu.slice(0, index), education, ...edu.slice(index + 1)];

      setEdu(updatedEdu);

      replace = null;
    } else {
      setEdu(edu => [...edu, education])
    }

    const form = document.getElementsByClassName("education-form")[0].firstChild;
    form.reset();
  }

  //allowing for edits in Education section
  function handleEducationEdit (eduObj) {
    document.getElementById("school").value = eduObj.school;
    document.getElementById("location-edu").value = eduObj.location;
    document.getElementById("study").value = eduObj.study;
    document.getElementById("start-date-edu").value = eduObj.startDate;
    document.getElementById("end-date-edu").value = eduObj.endDate;

    replace = eduObj;
  }

  //state for experiences
  const [exp, setExp] = useState([]);
  function handleExperienceClick (event) {
    event.preventDefault();

    //get all of the bullets which have been submitted
    const company = document.getElementById("company").value;
    const title = document.getElementById("title").value;
    const location = document.getElementById("location-exp").value;
    const start = document.getElementById("start-date-exp").value;
    const end = document.getElementById("end-date-exp").value;
    const bulletString = document.getElementById("bullets").value;

    const bulletArray = bulletString.split('\n');

    const experience = new Experience(company, title, location, start, end, bulletArray)

    setExp(exp => [...exp, experience]);

    const form = document.getElementsByClassName("experience-form")[0].firstChild;
    form.reset();
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
          <ExperienceForm onClick={handleExperienceClick}/>
        </div>
        <div className='resume-container'>
          <PersonalCV header={header} />
          <EducationCV education={edu} onClick={handleEducationEdit}/>
          <ExperienceCV experience={exp}/>
        </div>
      </div>
    </>
  )
}

export default App;
