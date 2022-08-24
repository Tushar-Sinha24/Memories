import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {provider} from 'react-redux';
import {createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


