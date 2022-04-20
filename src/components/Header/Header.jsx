// https://spectrecinema.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F09e44880-b79b-490a-87ae-03432fd67546%2F000048.gif?table=block&id=cd9471f5-d7bd-422d-90c1-9b761d1c5bed&spaceId=b5cc5582-0eb2-4d21-897c-2fce3bd7a4ed&userId=&cache=v2

import React from 'react'
import images from '../../constants/images'

import './Header.css'

const Header = () => {
  return (
    <div className="app__header">
        <div className="app__header-image">
            <img src="https://spectrecinema.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F09e44880-b79b-490a-87ae-03432fd67546%2F000048.gif?table=block&id=cd9471f5-d7bd-422d-90c1-9b761d1c5bed&spaceId=b5cc5582-0eb2-4d21-897c-2fce3bd7a4ed&userId=&cache=v2" alt="" />
        </div>
        <div className="app__header-desc">
            <div className="header__desc-title">
                <h2>
                    SPECTRE
                </h2>
            </div>
            <div className="header__desc-subtitle">
                <h3>
                    VIETNAM
                </h3>
                <img src={images.gradient} alt="" />
            </div>
            <div className="header__desc-desc">
                <p>
                Spectre is a selection of young and creative individuals, who are currently studying and living in different parts of the world.
    It is our mission to build a stable, diverse and vibrant cinematic community for Vietnam's upcoming creative generation.
                </p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Header