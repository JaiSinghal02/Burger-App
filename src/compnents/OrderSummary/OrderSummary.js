import React from 'react';
import Aux from '../../hoc/Auxillary';
import './OrderSummary.css';

const orderSummary = (props) => (
    <Aux >
        <p className="Summary-Heading">
            Your Order summary
        </p>
        <p className="Summary-Title">You ordered a Burger with following ingredients:</p>
        <ul className="Summary-List">
            <li className="Summary-List-1">Patty: {props.ing[0]}</li>
            <li className="Summary-List-2">Cheese: {props.ing[1]}</li>
            <li className="Summary-List-3">Salad: {props.ing[2]}</li>
            <li className="Summary-List-4">Pickle: {props.ing[3]}</li>
        </ul>
        <p className="Summary-Price">You Pay: Rs {props.price}</p>
        <div className="Summary-Btns">
        <button className="Summary-Cancel" onClick={props.ordCancel}>Cancel</button>
        <button className="Summary-Proceed">Proceed</button>
        </div>
        

    </Aux>
);
export default orderSummary;