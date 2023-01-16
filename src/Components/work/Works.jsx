import React from 'react'
import { projectsData, projectsNav } from './Data'
import WorkItem from './WorkItem'
import Work1 from '../../assets/work1.png'
import Work2 from '../../assets/work2.png'
import Work3 from '../../assets/work3.png'
import Work4 from '../../assets/work4.png'

const Works = () => {
  return (
<div>
     <div className='work__filters'>
        {projectsNav.map((item, index) => {

            return <span className='work__item'>
                {item.name}
            </span>
        })}  
    </div>

    <div className='work__container container grid'>
      <div className='work__card'>
        <img src={Work1} alt='' className='work__img' />
        <h3 className='work__title'>Monster India clone</h3>
        <div className='work__btn'>
        <a href='https://brilliant-caramel-dc05c8.netlify.app/' className='work__button'>
            Project Link
         </a>
        <br/>
        <a href="https://github.com/saurav269/lackadaisical-look-2573/tree/main/Homepage" className='home__social-icon' target='_blank'>
         <i class="uil uil-github-alt"></i>
        </a>
        </div>
       </div>

       <div className='work__card'>
        <img src={Work2} alt='' className='work__img' />
        <h3 className='work__title'>Interntheory Website Clone</h3>
        <div className='work__btn'>
        <a href='https://verdant-cassata-403b75.netlify.app/' className='work__button'>
            Project Link
            </a>
        <br/>
        <a href="https://github.com/saurav269/-lawful-dinner-785" className='home__social-icon' target='_blank'>
         <i class="uil uil-github-alt"></i>
        </a>
        </div>
       </div>

       <div className='work__card'>
        <img src={Work3} alt='' className='work__img' />
        <h3 className='work__title'>Tata 1mg Website Clone</h3>
        <div className='work__btn'>
        <a href='https://inquisitive-liger-94cfad.netlify.app/' className='work__button'>
            Project Link
            </a>
        <br/>
        <a href="https://github.com/saurav269/chemical-rake-3857/tree/main/my-project" className='home__social-icon' target='_blank'>
         <i class="uil uil-github-alt"></i>
        </a>
        </div>
       </div>


       <div className='work__card'>
        <img src={Work4} alt='' className='work__img' />
        <h3 className='work__title'>Timmer App</h3>
        <div className='work__btn'>
        <a href='https://effortless-rugelach-9a3600.netlify.app/' className='work__button'>
            Project Link
            </a>
        <br/>
        <a href="https://github.com/masai-course/saurav_mallik_fp05_269/tree/master/unit-4/sprint-2/day-4/we/timmer-app" className='home__social-icon' target='_blank'>
         <i class="uil uil-github-alt"></i>
        </a>
        </div>
       </div>
    </div>
</div>
  )
}

export default Works
