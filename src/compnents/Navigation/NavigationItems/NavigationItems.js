import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props)=>{
    return (
        <div className="Nav-items">
            <NavigationItem className="Nav-Home" link="/" >Build Burger</NavigationItem>
            <NavigationItem  className="Nav-About"link="/order-history" >Past Orders</NavigationItem>
            <NavigationItem  className="Nav-Auth"link="/auth" >Authenticate</NavigationItem>
        </div>
    )
};
export default navigationItems;