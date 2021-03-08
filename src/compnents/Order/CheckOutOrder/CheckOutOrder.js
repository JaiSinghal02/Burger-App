import React from 'react';
import Burger from '../../Burger/Burger';
import './CheckOutOrder.css'

const checkOutOrder = (props) => {
    return (
        <div className="Check-Out-Page">
            <h2 >{props.msg}</h2>
            <div className="Check-Out-Burger">
                <Burger val={props.ingredients} />
            </div>
            <div className="Check-Out-Btns">
                <button id="Check-Out-Cancel" onClick={props.cancel}>Go Back</button>
                <button id="Check-Out-Proceed" onClick={props.order}>Order</button>
            </div>
        </div>
    )
};
export default checkOutOrder;