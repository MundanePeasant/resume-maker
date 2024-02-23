import { useState } from 'react'
import PersonalForm from './components/PersonalForm'
import EducationForm from './components/EducationForm'
import './styles/App.css'

function App() {

  return (
    <>
      <div className='screen-container'>
        <div className='forms-container'>
          Header
          <PersonalForm />
          Education
          <EducationForm />
        </div>
        <div className='resume-container'>
          //will house the resume and update with the forms
        </div>
      </div>
    </>
  )
}

export default App
