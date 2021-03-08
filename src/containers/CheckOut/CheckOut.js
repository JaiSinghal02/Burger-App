import CheckOutOrder from '../../compnents/Order/CheckOutOrder/CheckOutOrder';
import React, { Component } from 'react';
import UserContact from '../UserContact/UserContact';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [], //patty,cheese,salad,pickle,
            price:0,
            message: ['Even though small its really delicious',
                'Hmm.. Such a nice combination!',
                'Woah! Mouth watering burger it is...',
                'Looks like you will a great time !',
                'Your burger is ready to serve your cravings..',
                'You sure got a good appetite',
                'Have a Bit Bite with Belly filling Burger..'],
            showContact: false
        }
        
    }
    componentDidMount() {
        const qstr = new URLSearchParams(this.props.location.search);
        const ing = []
        let p=0;
        for (let param of qstr.entries()) {
            if(param[0]==="price"){
                p=param[1];
            }
            else{
                ing.push(param[1]);
            }
            
        }
        this.setState({ ingredients: ing,price:p });

    }
    goBack() {
        this.props.history.goBack();
    }
    orderBurger() {
        this.setState({showContact:true})

    }
    render() {
        return (
            <>
                <CheckOutOrder
                    ingredients={this.state.ingredients}
                    cancel={this.goBack.bind(this)}
                    order={this.orderBurger.bind(this)}
                    msg={this.state.message[this.state.ingredients.length % 5]}
                />
                {this.state.showContact?<UserContact ing={this.state.ingredients} price={this.state.price} {...this.props}/>:null}
            </>
        )
    }
};
export default CheckOut;