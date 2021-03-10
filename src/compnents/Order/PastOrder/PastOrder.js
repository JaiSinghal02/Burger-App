import React, { Component } from 'react';
import './PastOrder.css';




class PastOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card1: true,
            card1Class: "Past-Order-Page",
            card2: false,
            card2Class: "Random"
        }
    }
    cardFlip() {
        if (this.state.card1) {
            this.setState(
                {
                    card1: false,
                    card2: true,
                    card1Class: "Past-Order-Page Hide",
                    card2Class: "Past-Order-Page Flip-Card-Show Show"
                }
            )
        }
        else {
            this.setState(
                {
                    card1: true,
                    card2: false,
                    card1Class: "Past-Order-Page Flip-Card-Show Show",
                    card2Class: "Past-Order-Page Hide"
                }
            )
        }
    }

    render() {
        let elements = [];
        if (this.state.card1) {
            for (let e in this.props.order) {
                if (+this.props.order[e] < 5) { elements.push(<li><span className="Bullet-Points">{e}: </span>{+this.props.order[e]}</li>) }
            }

        }
        else {
            let st = null;
            for (let e in this.props.order.Customer) {
                if (e === "phone_number") st = { width: "24%" };
                else st = null;
                elements.push(<li style={st}><span className="Bullet-Points">{e.split("_").join(" ")}: </span>{+this.props.order.Customer[e]}</li>)
            }
        }
        let cardDisp1, cardDisp2;
        cardDisp1 =
            <div className={this.state.card1Class}>
                <div className="Past-Order">
                    <div className="Past-Order-Pin"></div>
                    <div className="Past-Order-Details">

                        <p className="Past-Order-Ing">Ingredients:</p>
                        <ul>
                            {elements}
                        </ul>

                        <p className="Past-Order-Price">Price: Rs {this.props.order["Amount"]}</p>
                    </div>
                    <div className="Past-Order-Customer" onClick={this.cardFlip.bind(this)} >
                        <p className="Past-Order-Customer-Details" >Customer Details</p>
                    </div>
                </div>

            </div>
        cardDisp2 = <div className={this.state.card2Class}>
            <div className="Past-Order">
                <div className="Past-Order-Pin"></div>
                <div className="Past-Order-Details">

                    <p className="Past-Order-Ing">User Details:</p>
                    <ul>
                        {elements}
                    </ul>
                </div>
                <div className="Past-Order-Customer" onClick={this.cardFlip.bind(this)} >
                    <p className="Past-Order-Customer-Details" >Order Details</p>
                </div>
            </div>

        </div>
        return (
            <>
                {cardDisp1}
                {cardDisp2}
            </>
        )
    }
};
export default PastOrder;