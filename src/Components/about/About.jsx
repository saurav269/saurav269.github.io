   import React from 'react'
   import './about.css'
   import AboutImg from '../../assets/about.png'
   
   const About = () => {
     return (
      <section className='about section' id="about">
         <h2 className='section__title'>About Me</h2>
         <span className='section__subtitle'>My Introduction</span>

          <div className='about__container container grid'>
            <img src={AboutImg} alt="my name is" className='about__img' />
          </div>
      </section>
     )
   }
   
   export default About
   
