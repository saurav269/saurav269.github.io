  import React from 'react'
import Works from './Works'
import './work.css'
  
  const Work = () => {
    return (
     <section className='work section' id='projects'>
      <h2 className='working__title'>My Project</h2>
      <span className='working__subtitle'>Most Recent works</span>
       <Works />
     </section>
    )
  }
  
  export default Work
  