  import React from 'react'
import Backend from './Backend'
import Fronted from './Fronted'
  import './skills.css'
  
  const Skills = () => {
    return (
      <section className='skills section' id='skills'>
      <h2 className='section__title__skills'>Skills</h2>
      <span className='section__subtitle__skills'>My Technical Level</span>

      <div className='skills__container container grid'>

        <Fronted />

        <Backend />
      </div>
      </section>
    )
  }
  
  export default Skills
  