import React from 'react'
import Html from '../../assets/HTML.png'
import css from '../../assets/CSS.png'
import js from '../../assets/JS.png'
import react from '../../assets/REACT.png'
import redux from '../../assets/REDUX.png'
import chakra from '../../assets/CHAKRA.png'



const Fronted = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Fronted Developer</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <div className='image'>
                <img src={Html} alt='html' className='hero__img__ht'/>
                </div>
               <div>
                <h3 className='skills__name'>HTML</h3>
                {/* <span className='skills__level'>Basic+Advance</span> */}
               </div>
                </div>

                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <img src={css} alt='html' className='hero__img'/>

               <div>
                <h3 className='skills__name'>CSS</h3>
                {/* <span className='skills__level'>Basic</span> */}
               </div>

                </div>
                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <img src={js} alt='js' className='hero__img__js'/>

               <div>
                <h3 className='skills__name'>Javascript</h3>
                {/* <span className='skills__level'>Basic+Advanced</span> */}
               </div>
                </div>

                {/* <div className='skills__data'>
                <i class='bx bx-badge-check'></i>

               <div>
                <h3 className='skills__name'>Git</h3>
                <span className='skills__level'>Basic</span>
               </div>
                </div> */}
            </div>

            <div className='skills__group'>
                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <img src={react} alt='js' className='hero__img__rct'/>

               <div>
                <h3 className='skills__name'>React</h3>
                {/* <span className='skills__level'>Basic + Advanced</span> */}
               </div>
                </div>

                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <img src={redux} alt='js' className='hero__img__rct'/>

               <div>
                <h3 className='skills__name'>Redux</h3>
                {/* <span className='skills__level'>Basic</span> */}
               </div>
                </div>

                <div className='skills__data'>
                {/* <i class='bx bx-badge-check'></i> */}
                <img src={chakra} alt='js' className='hero__img__js'/>

               <div>
                <h3 className='skills__name'>Chakra UI</h3>
                {/* <span className='skills__level'>Basic</span> */}
               </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Fronted
