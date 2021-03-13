import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../compnents/Burger/Burger'
import BuildControls from '../../compnents/Burger/BuilControls/BuildControls'
import './BurgerBuilder.css'
import Modal from '../../compnents/UI/Modal/Modal';
import OrderSummary from '../../compnents/OrderSummary/OrderSummary';
import Spinner from '../../compnents/UI/Spinner/Spinner';
import { connect } from 'react-redux';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: [0, 0, 0, 0], //patty,cheese,salad,pickle
            rate: [15, 10, 8, 2],
            baseprice: 10,
            price: 10,
            shouldOrder: false,
            isPurchasing: false,
            spinner: false,
            msgStyle: 'flex' //to show LogOut MESSAGE beacuse after log-out user redirected to this page
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
    purchasing() {
        if (this.props.authId !== null) {
            this.setState({ isPurchasing: true });
        }
        else {
            this.props.onBurgerBuild(this.state.ingredient);
            this.props.history.push('/auth')
        }
        //console.log("true");
    }
    notPurchasing() {
        this.setState({ isPurchasing: false });
        //console.log("false");
    }
    checkOut() {
        alert("Are you sure")
    }

    orderBurger() {

        const q = this.state.ingredient.map((e, i) => {
            return (encodeURIComponent(String.fromCharCode(65 + i)) + "=" + encodeURIComponent(e));
        })
        q.push("price=" + String(`${this.state.price}`))
        const qstr = q.join("&");
        //console.log(q, qstr);
        this.props.history.push({
            pathname: '/check-out',
            search: '?' + qstr

        });
    }
    resetBurger() {
        let olding = [...this.state.ingredient];
        let reseting = olding.map(e => {
            return 0;
        })
        this.setState({ ingredient: reseting, shouldOrder: false,price:this.state.baseprice })
    }
    render() {
        let modalContent = <Spinner />
        if (!this.state.spinner) {
            modalContent = <OrderSummary
                ing={this.state.ingredient}
                ordCancel={this.notPurchasing.bind(this)}
                price={this.state.price}
                orderBurger={this.orderBurger.bind(this)}
            />
        }
        const changeStyle = () => {
            this.setState({ msgStyle: 'none' })
            this.props.afterFirstLogOut();
        }
        let logOut = null;
        if (this.props.loggedOut) {
            logOut = <p className="User-Log-Out-Msg" onAnimationEnd={changeStyle} style={{ display: this.state.msgStyle }}>Log Out Success</p>
            //this.props.afterFirstLogOut();
        }

        return (
            <Aux className="Container">
                <Modal showModal={this.state.isPurchasing}>
                    {modalContent}
                </Modal>
                {logOut}
                <Burger val={[...this.state.ingredient]}></Burger>

                <BuildControls
                    iClick={this.increase.bind(this)}
                    dClick={this.decrease.bind(this)}
                    ing={this.state.ingredient}
                    price={this.state.price}
                    checkOrd={this.state.shouldOrder}
                    ordered={this.purchasing.bind(this)}
                    reset={this.resetBurger.bind(this)}
                    isAuth={this.props.authId !== null}
                />

            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        loggedOut: state.logOut,
        authId: state.authId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onBurgerBuild: (ing) => dispatch({ type: 'IS_BURGER_BUILT', ing: ing }),
        afterFirstLogOut: ()=> dispatch({ type: 'SET_LOGOUT_FALSE'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);