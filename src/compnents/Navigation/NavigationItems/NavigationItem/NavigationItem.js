import React from 'react';
import './NavigationItem.css'

const navigationItem =(props)=>{
    return (

        <a className="Nav-Item" href={props.link}>{props.children}</a>
    );
}
export default navigationItem;