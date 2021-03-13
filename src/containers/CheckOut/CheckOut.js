import CheckOutOrder from '../../compnents/Order/CheckOutOrder/CheckOutOrder';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import './CheckOut.css';
import UserContact from '../UserContact/UserContact';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [], //patty,cheese,salad,pickle,
            rate: [15, 10, 8, 2],
            baseprice: 10,
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
        window.scrollTo(0,0);
        let ing = []
        let p=this.state.baseprice;
        if(this.props.location.search!==""){
            const qstr = new URLSearchParams(this.props.location.search);
            for (let param of qstr.entries()) {
                if(param[0]!=="price"){
                    ing.push(param[1]);
                }
                
            }
        }
        else{
            ing=this.props.burgerIngredients.map(e=>{
                return e;
            })
        }
        for(let i=0;i<4;++i){
            p+=(ing[i]*this.state.rate[i]);
        }
        this.setState({ ingredients: ing,price:p });

    }
    goBack() {
        this.props.history.push('/');
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

const mapStateToProps=state=>{
    return{
        isBurgerBuilt: state.isBurgerBuilt,
        burgerIngredients: state.ingredients,
        authId: state.authId,
        userId: state.userId
    }
}
export default connect(mapStateToProps)(CheckOut);