import React, {Component} from 'react';
import './OrderHistory.css'
import PastOrder from '../../compnents/Order/PastOrder/PastOrder';
import Spinner from '../../compnents/UI/Spinner/Spinner';
import axios from 'axios';
import {connect} from 'react-redux';

class OrderHistory extends Component{
    constructor(props){
        super(props);
        this.state={
            orders: [],
            spinner:true,
            error: 'No orders to show'
        }
    }
    componentDidMount(){
        window.scrollTo(0,0);
        const queryP='?auth='+this.props.authId+'&orderBy="userId"&equalTo="'+this.props.userId+'"';
        axios.get('https://burger-bing-react-app-default-rtdb.firebaseio.com/orders.json'+queryP)
            .then(res=>{
                let obj=[];
                for(let eachobj in res.data){
                    obj.push({
                        ...res.data[eachobj],
                        id:eachobj
                    })
                }
                this.setState({orders:obj,spinner:false});
            })
            .catch(err=>{
                this.setState({spinner:false,error: err.response.statusText});
            })
    }
    render(){
        let Orders=<Spinner/>
        let Heading,ExtraCard=null;
        if(!this.state.spinner){
            Orders=this.state.orders.map(e=>{
                return (
                    <PastOrder order={e} key={e.id}/>
                )
            })
            Heading=<p style={{fontSize:"1.5rem",fontWeight:"bolder"}}>The Orders are:</p>
            if(Orders.length===0){
                Orders=<p style={{fontSize:"1.5rem"}}>{this.state.error}</p>
                Heading=null;
            }
            else if(Orders.length%3!==0){
                let wid=(Orders.length%3)===1?'59%':'26%';
                ExtraCard=<p style={{fontSize:"1rem",width:String(wid),display:'flex',justifyContent:'center',alignItems:'center'}}>Make more orders...</p>
            }
        }
        return(
            <>
            {Heading}
            <div className="Order-History">
                {Orders}
                {ExtraCard}
            </div>
            </>
        )
    }
};

const mapStateToProps= state=>{
    return {
        authId: state.authId,
        userId: state.userId
    }
}
export default connect(mapStateToProps)(OrderHistory);