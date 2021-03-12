import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './store/reducers/reducer'
axios.defaults.baseURL='https://burger-bing-react-app-default-rtdb.firebaseio.com';

const store=createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
