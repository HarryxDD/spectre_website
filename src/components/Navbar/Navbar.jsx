import React, { useState } from 'react';
import images from '../../constants/images'
import './Navbar.css'

const Navbar = ({ toggleMenu, setToggleMenu }) => {


  return (


    <div className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt="" />
        </div>
        <div className="app__navbar-links">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CONTACTS</li>
            </ul>
        </div>
        {toggleMenu && (
            <div className='app__navbar-smallscreens_overlay'>
              <ul className='app__navbar-smallscreens_links'>
                <li><a href="#home" onClick={() => setToggleMenu(false)}>HOME</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>ABOUT</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>PROJECTS</a></li>
                <li><a href="#write" onClick={() => setToggleMenu(false)}>CONTACTS</a></li>
              </ul>
            </div>
          )}
        <div className={"app__navbar-ham " + (toggleMenu && "active")} onClick={() => setToggleMenu(!toggleMenu)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
        </div>
    </div>
  )
}

export default Navbar