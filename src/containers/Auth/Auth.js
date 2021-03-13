import React , { Component } from 'react';
import Spinner from '../../compnents/UI/Spinner/Spinner'
import BackDrop from '../../compnents/UI/Backdrop/BackDrop'
import openEye from '../../assets/images/open-eye.png'
import closedEye from '../../assets/images/closed-eye.png'
import axios from 'axios'
import {Redirect} from 'react-router-dom';
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
            successMessage:'',
            passwordType: 'password'
        }
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    saveDataToLocalStorage(authId,userId){
        localStorage.setItem('authId',authId)
        localStorage.setItem('userId',userId)
    }
    redirect(){
        let url='/check-out'
        if(!this.props.isBurgerBuilt){
            url='/'
        }
        setTimeout(()=>{
            this.props.history.push(url)
        },2000)
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
                    this.setState({showSpinner:false,successMessage:"Sign Up Successful"})
                    this.props.onAuth(res.data.idToken,res.data.localId)
                    this.saveDataToLocalStorage(res.data.idToken,res.data.localId);
                    this.redirect();
                })
                .catch(err=>{
                    this.setState({showError:true,errorMessage:err.response.data.error.message.split("_").join(" "),showSpinner:false});
                    
                    
                })
        }
        else{
            axios.post(singInUrl,user)
                .then(res=>{
                    this.setState({showSpinner:false,successMessage:"Sign in Successful"})
                    this.props.onAuth(res.data.idToken,res.data.localId);
                    this.saveDataToLocalStorage(res.data.idToken,res.data.localId);
                    this.redirect();
                })
                .catch((err)=>{
                    this.setState({showError:true,errorMessage:err.response.data.error.message.split("_").join(" "),showSpinner:false});
                    
                })
        }
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
    togglePassword(){
        let oldval=this.state.passwordType;
        let newval=(oldval==='password')?'text':'password';
        this.setState({passwordType:newval});
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
                    <div className="Password-Block">
                    <input type={this.state.passwordType} placeholder="Password" onChange={(e)=> this.inputForm(e,"password")} required minLength="6"></input>
                    <div className="Toggle-Password-Img">

                        <img src={this.state.passwordType==='password'?closedEye:openEye} 
                        alt="Password-Toggler"  
                        onClick={this.togglePassword.bind(this)}
                        title={this.state.passwordType==='password'?"View-Password":"Hide-Password"}>
                        </img>
                    </div>
                    </div>
                    <button className="Auth-Form-Submit-Btn">{this.state.isSignUp?"Sign Up":"Sign in"}</button>
                </form>
            </div>
            <button className="Auth-Form-Switch-Btn" onClick={this.switchAuthMode.bind(this)}>{this.state.isSignUp?"Old User? Login Here":"New User? Sign-up Here"}</button>
        </div>
        }

        let moveToPage=null;
        if(this.props.isAuth && !this.props.isBurgerBuilt){
            moveToPage=<Redirect to='/'/>
        }
        else if(this.props.isAuth && this.props.isBurgerBuilt){
            moveToPage=<Redirect to='/check-out'/>
        }
        return(
            <>
            {moveToPage}
            {errorBox}
            {content}
            </>
        )
    }
}
const mapStateToProps = state=>{
    return{
        isBurgerBuilt: state.isBurgerBuilt,
        burgerIngredients: state.ingredients,
        isAuth: state.authId !==null
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        onAuth: (authId,userId)=> dispatch({type: actionTypes.SET_AUTH_ID, authId: authId,userId: userId})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Auth);