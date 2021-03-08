import React, {Component} from 'react';
import './OrderHistory.css'
import PastOrder from '../../compnents/Order/PastOrder/PastOrder';
import Spinner from '../../compnents/UI/Spinner/Spinner';
import axios from 'axios';

class OrderHistory extends Component{
    constructor(props){
        super(props);
        this.state={
            orders: [],
            spinner:true
        }
    }
    componentDidMount(){
        axios.get('https://burger-bing-react-app-default-rtdb.firebaseio.com/orders.json')
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
                this.setState({spinner:false});
                console.log(err);
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
                Orders=<p style={{fontSize:"1.5rem"}}>No Orders to show ...</p>
                Heading=null;
            }
            else if(Orders.length%3!==0){
                let wid=(Orders.length%3)===1?'56%':'26%';
                console.log(typeof wid)
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
export default OrderHistory;