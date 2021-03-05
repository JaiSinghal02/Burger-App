import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import './OrderSummary.css';

class OrderSummary extends Component {
    //let NewBurger=<Burger val={props.ing} />
    

    render() {

        return (
            <Aux >
                <p className="Summary-Heading">
                    Your Order summary
                </p>
                <p className="Summary-Title">You ordered a Burger with following ingredients:</p>
                <ul className="Summary-List">
                    <li className="Summary-List-1">Patty: {this.props.ing[0]}</li>
                    <li className="Summary-List-2">Cheese: {this.props.ing[1]}</li>
                    <li className="Summary-List-3">Salad: {this.props.ing[2]}</li>
                    <li className="Summary-List-4">Pickle: {this.props.ing[3]}</li>
                </ul>
                <p className="Summary-Price">You Pay: Rs {this.props.price}</p>
                <div className="Summary-Btns">
                    <button className="Summary-Cancel" onClick={this.props.ordCancel}>Cancel</button>
                    <button className="Summary-Proceed" onClick={this.props.orderBurger}>Proceed</button>
                </div>


            </Aux>
        );
    }
}

export default OrderSummary;