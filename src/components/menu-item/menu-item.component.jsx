import React from 'react';
//withRouter is a higher-order component i.e a function that
// takes a component and returns a modified component 
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';


//destructure and populate
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image'
         style={{
            backgroundImage: `url(${imageUrl})`
        }}  />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default  withRouter(MenuItem);