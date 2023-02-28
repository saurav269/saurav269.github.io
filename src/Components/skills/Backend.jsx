   import React from 'react'
   import nodejs from '../../assets/NODEJS.png'
   import mongodb from '../../assets/MONGODB.png'
   import express from '../../assets/EXPRESS.png'
   
   const Backend = () => {
     return (
        <div className='skills__content'>
        <h3 className='skills__title'>Backend Developer</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <img src={nodejs} alt='js' className='hero__img'/>
               <div>
                <h3 className='skills__name'>Node JS</h3>
                {/* <span className='skills__level'>Basic</span> */}
               </div>
                </div>

                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <img src={express} alt='js' className='hero__img__js'/>

               <div>
                <h3 className='skills__name'>Express</h3>
                {/* <span className='skills__level'>Basic</span> */}
               </div>
                </div>
            </div>

            <div className='skills__group'>
                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <img src={mongodb} alt='js' className='hero__img__js'/>

               <div>
                <h3 className='skills__name'>MongoDB</h3>
                {/* <span className='skills__level'>Basic</span> */}
               </div>
                </div>
            </div>
        </div>    
    </div>
     )
   }
   
   export default Backend
   