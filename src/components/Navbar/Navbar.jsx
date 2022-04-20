import React, { useState } from 'react';
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {


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
    </div>
  )
}

export default Navbar