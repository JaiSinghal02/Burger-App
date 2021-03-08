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
            validateClass:['','','','',''],
            canSubmit:false,
            exit:false

        }
    }
    validateInfo(){
        console.log("Mouse")
        let check=true,c=[]
        c.push((this.state.name.trim().length>=5 && this.state.name.trim().length<=25));
        c.push((+this.state.age)<=100 && (+this.state.age)>6);
        c.push(( (Math.log(this.state.phone_number) * Math.LOG10E + 1 | 0)===10));
        c.push((this.state.address.street.trim().length>5));
        c.push((Math.log(this.state.address.pincode) * Math.LOG10E + 1 | 0)===6);
        check&=c[0]&c[1]&c[2]&c[3]&c[4];
        let newClass=[]
        for(let i=0;i<c.length;++i){
            if(c[i]){
                newClass.push('Correct-Info');
            }
            else{
                newClass.push('Incorrect-Info')
            }
        }
        this.setState({validateClass:newClass,canSubmit:check})
        return check;

    }
    order(e) {
        console.log("reading..",this.props)
        e.preventDefault();
        if(this.validateInfo()){
            
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
                },1500)
                
            })
            .catch(err => {
                this.setState({ spinner: false });
                console.log(err);
            })
        }
        
    }
    updInfo(event,x){
        let arr=["name","email","age","phone_number"]
        if(arr.includes(x) ){
            let newState={...this.state}
            newState[x]=event.target.value
            this.setState(newState);
        }
        else{
            let newAdd={...this.state.address};
            newAdd[x]=event.target.value;
            this.setState({address:newAdd})
        }
    }
    render() {
        let form = <ContactForm 
        submitContact={this.order.bind(this)} 
        changed={this.updInfo.bind(this)} 
        validateClass={this.state.validateClass} 
        btnCheck={this.state.canSubmit}
        validateInfo={this.validateInfo.bind(this)}
        />;
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