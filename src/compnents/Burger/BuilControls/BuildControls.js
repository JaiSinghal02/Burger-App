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
        <div className="Build-Box">
            <div className="Control-Box">
            {
                scheme.map((val, i) => {
                    return <BuildControl label={val.label}
                        value={val.value}
                        decClick={() => props.dClick(i)}
                        incClick={() => props.iClick(i)}
                        limit={val.limit}
                        ingd={props.ing}
                        key={val.label+val.value}
                    />
                })
            }

            </div>

            <div className="Price-Section">
                <div className="Price">
                    Total price: Rs{props.price}
                </div>
                <button className="Check-Out" disabled={!props.checkOrd} onClick={props.ordered}>{props.isAuth?'Check out':'Sign-in/Sign-up'}</button>
            </div>
            <div className="Reset-Button-Div"><button className="Reset-Button" disabled={!props.checkOrd} onClick={props.reset}>Reset</button></div>

        </div>
    </div>

)

export default BuildControls;