  import React from 'react'
  import Calender from '../../assets/calender.png'
  import Star from '../../assets/star.png'
  import './statistic.css'
   
  const Statistic = () => {
    return (
   <section className='statistic section'>
       <div>
        <h2 className='statistic__title'>My Statistic</h2>
       </div>

       <div className='star__div'>
        <p className='star__p'>Github Stars</p>
        <img src={Star} alt='star' className='star__img' />
       </div>

       <div className='calender__div'>
        <p className='calender__p'>GitHub Calender</p>
        <img src={Calender} alt='calender' className='calender__img' />
       </div>
   </section>
    )
  }
  
  export default Statistic
  