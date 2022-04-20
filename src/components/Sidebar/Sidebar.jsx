import React from 'react'
import { FaFacebookF, FaInstagram, FaBehance } from 'react-icons/fa'
import { BsArrowDown } from 'react-icons/bs'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="app__sidebar">
        <div className="app__icon">
            <div className="icon__facebook">
                <FaFacebookF />
            </div>
            <div className="icon__instagram">
                <FaInstagram />
            </div>
            <div className="icon__behance">
                <FaBehance />
            </div>
        </div>
        <div className="app__scroll">
            <p>SCROLL DOWN</p>
            <BsArrowDown />
        </div>
    </div>
  )
}


export default Sidebar