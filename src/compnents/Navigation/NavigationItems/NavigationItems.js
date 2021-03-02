import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props)=>{
    return (
        <div className="Nav-items">
            <NavigationItem className="Nav-Home" link="/" >Home</NavigationItem>
            <NavigationItem  className="Nav-About"link="/" >About us</NavigationItem>
        </div>
    )
};
export default navigationItems;