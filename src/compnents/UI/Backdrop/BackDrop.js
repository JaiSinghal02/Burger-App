import React from 'react';
import './BackDrop.css';

const backDrop = (props)=>{
    return (
        props.showBack?
        <div className="BackDrop"></div>:
        null
    )
};
export default backDrop;