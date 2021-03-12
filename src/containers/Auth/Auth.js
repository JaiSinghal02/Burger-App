import React , { Component } from 'react';
import Spinner from '../../compnents/UI/Spinner/Spinner'
import BackDrop from '../../compnents/UI/Backdrop/BackDrop'
import axios from 'axios'
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/action'
import './Auth.css'
class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            isSignUp:true,
            showSpinner:false,
            showError:false,
            errorMessage:'',
            successMessage:''
        }
    }
    redirect(){
        setTimeout(()=>{
            this.props.history.push('/')
        },1600)
    }
    submitForm(e){
        e.preventDefault();
        this.setState({showSpinner:true})
        const user={
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
        const API_KEY="AIzaSyASwfloARUCKW8QwD43Wm_STvVYdHYjGZY";
        const signUpUrl="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+API_KEY;
        const singInUrl="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+API_KEY;
        if(this.state.isSignUp){
            axios.post(signUpUrl,user)
                .then(res=>{
                    console.log(res);
                    this.setState({showSpinner:false,successMessage:"Sign Up Successful"})
                    this.props.onAuth(res.data.idToken)
                    this.redirect();
                })
                .catch(err=>{
                    this.setState({showError:true,errorMessage:err.response.data.error.message.split("_").join(" "),showSpinner:false});
                    console.log(err.message,"\n",user);
                    
                })
        }
        else{
            axios.post(singInUrl,user)
                .then(res=>{
                    console.log(res)
                    this.setState({showSpinner:false,successMessage:"Sign in Successful"})
                    this.props.onAuth(res.data.idToken)
                    this.redirect();
                })
                .catch((err)=>{
                    this.setState({showError:true,errorMessage:err.response.data.error.message.split("_").join(" "),showSpinner:false});
                    console.log("err code=",err.response.data)
                })
        }
        console.log("Form Submitted")
    }
    switchAuthMode(){
        this.setState({isSignUp: !this.state.isSignUp})
    }
    inputForm(e,target){
        let oldState={...this.state};
        oldState[target]=e.target.value;
        oldState['showError']=false;
        this.setState(oldState);
    }
    render(){
        let errorBox=this.state.showError?<div className="Auth-Error">{this.state.errorMessage}</div>:null;
        let content=
        <>
        <BackDrop showBack={this.state.showSpinner}></BackDrop>
        <Spinner />
        </>
        if(this.state.successMessage !==''){
            content=<>
            <BackDrop showBack="true"></BackDrop>
            <p className="Auth-Success-Msg">{this.state.successMessage}</p>
            </>
        }
        if((!this.state.showSpinner) && this.state.successMessage===''){
            content=<div className="Auth-Form-Box">
            <div className="Auth-Form-Div">
                <h4>{this.state.isSignUp?"Sign Up Form":"Sign In Form"}</h4>
                <form className="Auth-Form" onSubmit={(e)=>this.submitForm(e)}>
                    <input type="email" placeholder="Email Address" onChange={(e)=> this.inputForm(e,"email")} required autoFocus></input>
                    <input type="password" placeholder="Password" onChange={(e)=> this.inputForm(e,"password")} required minLength="6"></input>
                    <button className="Auth-Form-Submit-Btn">{this.state.isSignUp?"Sign Up":"Sign in"}</button>
                </form>
            </div>
            <button className="Auth-Form-Switch-Btn" onClick={this.switchAuthMode.bind(this)}>{this.state.isSignUp?"Old User? Login Here":"New User? Sign-up Here"}</button>
        </div>
        }
        return(
            <>
            {errorBox}
            {content}
            </>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onAuth: (authId)=> dispatch({type: actionTypes.SET_AUTH_ID, authId: authId})
    }
}
export default connect(null,mapDispatchToProps)(Auth);