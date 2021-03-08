import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../compnents/Burger/Burger'
import BuildControls from '../../compnents/Burger/BuilControls/BuildControls'
import './BurgerBuilder.css'
import Modal from '../../compnents/UI/Modal/Modal';
import OrderSummary from '../../compnents/OrderSummary/OrderSummary';
import Spinner from '../../compnents/UI/Spinner/Spinner';
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: [0, 0, 0, 0], //patty,cheese,salad,pickle
            rate: [15, 10, 8, 2],
            baseprice: 10,
            price: 10,
            shouldOrder: false,
            isPurchasing:false,
            spinner:false
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

    orderBurger() {
        
        const q=this.state.ingredient.map((e,i)=>{
            return (encodeURIComponent(String.fromCharCode(65+i))+"="+ encodeURIComponent(e));
        })
        q.push("price="+String(`${this.state.price}`))
        const qstr=q.join("&");
        console.log(q,qstr);
        this.props.history.push({
            pathname:'/check-out',
            search: '?'+qstr
        
        });
    }
    resetBurger(){
        let olding=[...this.state.ingredient];
        let reseting=olding.map(e=>{
            return 0;
        })
        this.setState({ingredient:reseting,shouldOrder:false})
    }
    render() {
        let modalContent=<Spinner/>
        if(!this.state.spinner){
            modalContent=<OrderSummary 
            ing={this.state.ingredient} 
            ordCancel={this.notPurchasing.bind(this)}
            price={this.state.price}
            orderBurger={this.orderBurger.bind(this)}
            />
        }
        return (
            <Aux className="Container">
                <Modal showModal={this.state.isPurchasing}>
                    {modalContent}
                </Modal>
                <Burger val={[...this.state.ingredient]}></Burger>

                <BuildControls
                    iClick={this.increase.bind(this)}
                    dClick={this.decrease.bind(this)}
                    ing={this.state.ingredient}
                    price={this.state.price}
                    checkOrd={this.state.shouldOrder}
                    ordered={this.purchasing.bind(this)}
                    reset={this.resetBurger.bind(this)}
                />

            </Aux>
        );
    }
};
export default BurgerBuilder;