import React from 'react';
import './PastOrder.css';




const pastOrder = (props)=>{
    let elements=[]
    for(let e in props.order){
        if(+props.order[e]<5) {elements.push(<li><span>{e}: </span>{+props.order[e]}</li>)}
    }
    return (
        <div className="Past-Order">
            <div className="Past-Order-Pin"></div>
            <p className="Past-Order-Ing">Ingredients:</p>
                <ul>
                    {/* <li>Patty: 2</li>
                    <li>Cheese: 1</li>
                    <li>Salad: 3</li>
                    <li>Pickle: 2 </li> */}
                    {elements}
                </ul>
            
            <p className="Past-Order-Price">Price: Rs {props.order["Amount"]}</p>
        </div>
    )
};
export default pastOrder;