import React, { Component } from 'react';
import ContactForm from '../../compnents/Order/ContactForm/ContactForm';
import Spinner from '../../compnents/UI/Spinner/Spinner';
import Modal from '../../compnents/UI/Modal/Modal';
import axios from 'axios'

class UserContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: '',
            phone_number: '',
            address: {
                street: '',
                pincode: '',
            },
            spinner: false,
            exit:false

        }
    }
    order(e) {
        console.log("reading..",this.props)
        e.preventDefault();
        this.setState({ spinner: true })
        const order = {
            Patty: this.props.ing[0],
            Cheese: this.props.ing[1],
            Salad: this.props.ing[2],
            Pickle: this.props.ing[3],
            Amount: this.props.price
        }
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ spinner: false,exit:true });
                console.log(res);
                setTimeout(()=>{
                    this.props.history.push('/')
                },2000)
                
            })
            .catch(err => {
                this.setState({ spinner: false });
                console.log(err);
            })
    }
    render() {
        let form = <ContactForm submitContact={this.order.bind(this)} />;
        if (this.state.spinner) {
            form = <Spinner />
        }
        else if (this.state.exit){
            form=<Modal showModal="true">
                <div style={{
                    display:'flex',
                    width:'100%',
                    height:'80px',
                    fontSize:'1em',
                    justifyContent:'center',
                    alignItems:'center'}}>
                        Order Successful
                    </div>
                </Modal>
        }
        return (
            <>
                {form}
            </>
        )
    }

};
export default UserContact;