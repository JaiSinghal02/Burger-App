import React from 'react';
import './Toolbar.css';
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuBtn from '../../../assets/images/Menu-Button.png';

//import Aux from '../../../hoc/Auxillary';
const toolbar =(props)=>{
    return (
    <header className="Toolbar-Head">
        <Logo/>
        <p className="Menu">Menu</p>
        <nav className="Toolbar-Nav-Items">
        <NavigationItems show={props.show}/>
        </nav>
        
        <img src={MenuBtn} alt="Menu-Button" className="Nav-Button" onClick={props.toggle}></img>
    </header>
    )

}

export default toolbar;