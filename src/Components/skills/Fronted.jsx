import React from 'react'
import Html from '../../assets/HTML.png'

const Fronted = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Fronted Developer</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                <i class='bx bx-badge-check'></i>
                {/* <img src={Html} alt='html' className='hero__img'/> */}

               <div>
                <h3 className='skills__name'>HTML</h3>
                <span className='skills__level'>Basic+Advance</span>
               </div>
                </div>

                <div className='skills__data'>
                <i class='bx bx-badge-check'></i>
                {/* <img src={Html} alt='html' className='hero__img'/> */}

               <div>
                <h3 className='skills__name'>CSS</h3>
                <span className='skills__level'>Basic</span>
               </div>

                </div>
                <div className='skills__data'>
                <i class='bx bx-badge-check'></i>

               <div>
                <h3 className='skills__name'>Javascript</h3>
                <span className='skills__level'>Basic+Advanced</span>
               </div>
                </div>

                <div className='skills__data'>
                <i class='bx bx-badge-check'></i>

               <div>
                <h3 className='skills__name'>Git</h3>
                <span className='skills__level'>Basic</span>
               </div>
                </div>
            </div>

            <div className='skills__group'>
                <div className='skills__data'>
                <i class='bx bx-badge-check'></i>

               <div>
                <h3 className='skills__name'>React</h3>
                <span className='skills__level'>Basic + Advanced</span>
               </div>
                </div>

                <div className='skills__data'>
                <i class='bx bx-badge-check'></i>

               <div>
                <h3 className='skills__name'>Redux</h3>
                <span className='skills__level'>Basic</span>
               </div>
                </div>

                <div className='skills__data'>
                <i class='bx bx-badge-check'></i>

               <div>
                <h3 className='skills__name'>Chakra UI</h3>
                <span className='skills__level'>Basic</span>
               </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Fronted
