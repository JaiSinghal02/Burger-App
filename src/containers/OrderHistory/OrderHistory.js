import React, {Component} from 'react';
import './OrderHistory.css'
import PastOrder from '../../compnents/Order/PastOrder/PastOrder';

class OrderHistory extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="Order-History">
                <PastOrder/>
                <PastOrder/>
            </div>
        )
    }
};
export default OrderHistory;