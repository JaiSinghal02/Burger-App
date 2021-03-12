import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/BackDrop';
import './SideDrawer.css';

const sideDrawer = (props)=>{
    let classes="Drawer-Cont Close";
    if(props.show){
        classes="Drawer-Cont Open";
    }
    return (
        <div className="Side-Drawer">
        <BackDrop showBack={props.show} clicked={props.toggle}/>
        <div className={classes}>
            <div className="Drawer-Menu">Menu</div>
            <div className="Drawer-Nav">
                <NavigationItems toggle={props.toggle}/>
            </div>

        </div>
        </div>
    );
};
export default sideDrawer;