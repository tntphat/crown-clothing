import React from 'react';
import './menu-item.styles.scss'


const MenuItem = ({ title , size, imgUrl}) => {
    return (
        <div className={`${size} menu-item`}
         >
            <div className='background-image'
            style={{backgroundImage: `url(${imgUrl})`}} />
            
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;