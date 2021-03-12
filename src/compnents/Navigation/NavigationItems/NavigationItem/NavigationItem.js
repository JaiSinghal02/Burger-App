import React from 'react';
import './NavigationItem.css'
import {NavLink} from 'react-router-dom';

const navigationItem =(props)=>{
    return (

        <NavLink className="Nav-Item" to={props.link} onClick={props.click}>{props.children}</NavLink>
    );
}
export default navigationItem;