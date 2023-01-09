import React from 'react'
import { useState } from 'react';
// import './App.css';
import './header.css'

const Header = () => {

    //----------Toggle Menu--------//
    const[Toggle, showMenu] = useState(false)
    
    
  return (
    <div>
      <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                Saurav
            </a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uli uil-estate nav__icon">
                            </i>Home
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
                        <a href="#services" className="nav__link">
                            <i className="uli uil-briefcase-alt nav__icon">     
                            </i>
                            Services
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
