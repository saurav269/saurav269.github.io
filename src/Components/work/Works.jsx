import React from 'react'
import { projectsData, projectsNav } from './Data'
import WorkItem from './WorkItem'
import Work1 from '../../assets/work1.png'
import Work2 from '../../assets/work2.png'
import Work3 from '../../assets/work3.png'
import Work4 from '../../assets/work4.png'
import { useState } from 'react'
import { useEffect } from 'react'

const Works = () => {

    const[item, setItem] = useState({name : "all"})
    const[projects, setProjects] = useState([]);
    const[active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'all'){
            setProjects(projectsData)
        }else{
            const newProjects = projectsData.filter((project) =>{
                return project.category === item.name;
            });
            setProjects(newProjects)
        }
    },[item]);

    const handleClick=(e,index)=>{
          setItem({name : e.target.textContent})
          setActive(index)
    }

return (
<div>
     <div className='work__filters'>
        {projectsNav.map((item, index) => {
            return <span 
            onClick={(e) => {
               handleClick(e,index)
            }}
            className={`${active === index ? 'active-work' : ""}
            work__item`}
            key={index}
            >
            {item.name}
            </span>
        })}  
    </div>

    <div className='work__container container grid'>
      <div className='work__card'>
        <img src={Work1} alt='' className='work__img' />
        <h3 className='work__title'>Monster India clone</h3>
        <div className='works__sub'>
            <p>An online platform
             where anyone can search
         and find jobs according to their choice.
        An Individual Project executed in 5 days.</p>
         </div>
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
        <div className='works__sub'>
            <p>An online platform where anyone can complete
              their internship and enhance their skill.
              A collaborative project built by a team of 5
              members executed in 5 days.</p>
         </div>
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
        <div className='works__sub'>
            <p>An online medical platform which provides services, 
                including e-pharmacy,diagnostics, e-consultation 
                and health content. An Individual Project executed in 5 days.</p>
         </div>
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
        <div className='works__sub'>
            <p>A Timmer app which shows hour,minute,and second.User can start,pause and reset also.
                Created this app using React</p>
         </div>
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
