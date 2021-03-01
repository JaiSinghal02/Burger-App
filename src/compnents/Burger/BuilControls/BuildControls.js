import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'
const scheme = [
    { label: "Patty", value: 0, limit: 2 },
    { label: "Cheese", value: 1, limit: 3 },
    { label: "Salad", value: 2, limit: 2 },
    { label: "Pickle", value: 3, limit: 4 }
]

const BuildControls = (props) => (

    <div className="BuildControls">

        {
            scheme.map((val, i) => {
                return <BuildControl label={val.label}
                    value={val.value}
                    decClick={() => props.dClick(i)}
                    incClick={() => props.iClick(i)}
                    limit={val.limit}
                    ingd={props.ing}
                />
            })
        }

        <div className="Price-Section">
            <div className="Price">
                Total price: Rs{props.price}
            </div>
            <button className="Check-Out" disabled={!props.checkOrd} onClick={props.ordered}>Check out</button>
        </div>
    </div>

)

export default BuildControls;