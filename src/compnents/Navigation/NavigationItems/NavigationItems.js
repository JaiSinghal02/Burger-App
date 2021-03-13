import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';
import * as actionTypes from '../../../store/actions/action'
import { connect } from 'react-redux';

const navigationItems = (props)=>{
    let navItem=<NavigationItem  className="Nav-Auth"link="/auth" >Log In</NavigationItem>
    if(props.authId){
        navItem=
        <>
        <NavigationItem  className="Nav-About" link="/" click={props.userLogout}>Log Out</NavigationItem>
        <NavigationItem  className="Nav-About" link="/order-history" >Past Orders</NavigationItem>
        
        </>
    }
    return (
        <div className="Nav-items" onClick={props.toggle}>
            
            {navItem}
            <NavigationItem className="Nav-Home" link="/" >Build Burger</NavigationItem>
        </div>
    )
};

const mapStateToProps= state=>{
    return {
        authId: state.authId
    }
};
const mapDispatchToProps= dispatch=>{
    return {
        userLogout : ()=>dispatch({type:actionTypes.USER_LOGOUT})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(navigationItems);