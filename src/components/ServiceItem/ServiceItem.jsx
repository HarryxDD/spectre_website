import React from 'react'
import './ServiceItem.css'

const ServiceItem = ({ image, title, subtitle }) => {
  return (
    <div className="item">
        <div className="item__image">
            <img src={image} alt="" />
        </div>
        <div className="item__desc">
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default ServiceItem