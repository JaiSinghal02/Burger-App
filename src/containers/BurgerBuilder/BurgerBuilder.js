import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../compnents/Burger/Burger'
import BuildControls from '../../compnents/Burger/BuilControls/BuildControls'
import './BurgerBuilder.css'
import Modal from '../../compnents/UI/Modal/Modal';
import OrderSummary from '../../compnents/OrderSummary/OrderSummary';
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: [0, 0, 0, 0], //patty,cheese,salad,pickle
            rate: [2, 3, 4, 5],
            baseprice: 10,
            price: 10,
            shouldOrder: false,
            isPurchasing:false
        }
    };
    updateShouldOrder(ing) {
        let checkOrder = ing.reduce((sum, el) => {
            return sum + el;
        }, 0) === 0 ? false : true;
        this.setState({ shouldOrder: checkOrder });
    }

    decrease(x) {
        let olding = [...this.state.ingredient];
        olding[x] -= 1;
        let newp = this.state.price;
        newp -= this.state.rate[x]
        this.setState({
            ingredient: olding,
            price: newp
        })
        this.updateShouldOrder(olding);

    }
    increase(x) {
        let olding = [...this.state.ingredient];
        olding[x] += 1;
        let newp = this.state.price;
        newp += this.state.rate[x];
        this.setState({
            ingredient: olding,
            price: newp
        })
        this.updateShouldOrder(olding);
    }
    purchasing(){
        this.setState({isPurchasing:true});
        //console.log("true");
    }
    notPurchasing(){
        this.setState({isPurchasing:false});
        //console.log("false");
    }
    checkOut() {
        alert("Are you sure")
    }
    render() {
        return (
            <Aux className="Container">
                <Modal showModal={this.state.isPurchasing}>
                    <OrderSummary 
                    ing={this.state.ingredient} 
                    ordCancel={this.notPurchasing.bind(this)}
                    price={this.state.price}
                    />
                </Modal>
                <Burger val={[...this.state.ingredient]}></Burger>

                <BuildControls
                    iClick={this.increase.bind(this)}
                    dClick={this.decrease.bind(this)}
                    ing={this.state.ingredient}
                    price={this.state.price}
                    checkOrd={this.state.shouldOrder}
                    ordered={this.purchasing.bind(this)}
                />

            </Aux>
        );
    }
};
export default BurgerBuilder;