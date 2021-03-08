import './App.css';
import Layout from './compnents/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import OrderHistory from './containers/OrderHistory/OrderHistory'
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path='/check-out' component={CheckOut}/>
        <Route path='/order-history' component={OrderHistory}/>
        <Route path="/" component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
