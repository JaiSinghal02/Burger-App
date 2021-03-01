import React from 'react';
import './BuildControl.css'

const buildControl =(props)=>{
    return(
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Decrease" 
        onClick={props.decClick} 
        disabled={props.ingd[props.value]===0}>Decrease</button>

        <button className="Increase" 
        onClick={props.incClick} 
        disabled={props.ingd[props.value]>=props.limit}>Increase</button>
    </div>

    )
}
export default buildControl;