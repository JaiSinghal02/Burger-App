import './App.css';
import Layout from './compnents/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import OrderHistory from './containers/OrderHistory/OrderHistory'
import Auth from './containers/Auth/Auth'
import * as actionTypes from './store/actions/action'
import { connect } from 'react-redux'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

let checkAuthStatus = (props) => {
  let authId = localStorage.getItem('authId');
  let userId = localStorage.getItem('userId');
  if (authId !== null) {
    props.autoSignIn(authId, userId)
  }
}

function App(props) {
  if(!props.isAuth){
    checkAuthStatus(props);

  }
  let routes = <Switch>
    <Route path='/auth' component={Auth} />
    <Route path="/" component={BurgerBuilder} />
    <Redirect to='/' />
  </Switch>
  if (props.isAuth) {
    routes = <Switch>
      <Route path='/check-out' component={CheckOut} />
      <Route path='/order-history' component={OrderHistory} />
      <Route path='/auth' component={Auth} />
      <Route path="/" component={BurgerBuilder} />
      <Redirect to='/' />
    </Switch>
  }
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isAuth: state.authId !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoSignIn: (authId, userId) => dispatch({ type: actionTypes.SET_AUTH_ID, authId: authId, userId: userId })
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
