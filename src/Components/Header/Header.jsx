import React from 'react'
import { useState } from 'react';
// import './App.css';
import './header.css'
import RESUME from '../../assets/fp05_269-Saurav_Mallik-Resume.pdf'

const Header = () => {

    //----------Toggle Menu--------//
    const[Toggle, showMenu] = useState(false)
    const handleClick=()=>{
        // <a download='' href={RESUME}></a>
        window.open('https://drive.google.com/file/d/1Zdo08qPlBnzd0txahuzbAiicmSHOJzs-/view?usp=sharing',"blank")
        console.log("hello")
    }
    
  return (
    <div>
      <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
              <p className='my__name'>
              Saurav Mallik
              </p>
            </a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uli uil-estate nav__icon">
                            </i>
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uli uil-user nav__icon">   
                            </i>
                            About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uli uil-file-alt nav__icon">     
                            </i>
                            Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#projects" className="nav__link">
                            <i className="uli uil-scenery nav__icon">     
                            </i>
                            Projects
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uli uil-message nav__icon">     
                            </i>
                            Contact
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href={RESUME} download='fp05_269-Saurav_Mallik-Resume.pdf' onClick={handleClick}
                         className="nav__link">
                            <i className="uli uil-briefcase-alt nav__icon">     
                            </i>
                            Resume
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" 
                 onClick={() => showMenu(!Toggle)}
                ></i>
            </div>
            <div className="nav__toggle" onClick={() => 
                showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
