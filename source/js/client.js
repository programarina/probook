import 'babel-polyfill';
import 'isomorphic-fetch';
// Load CSS
import 'index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../js/views/App';
import { Provider } from 'react-redux';
import configureStore from 'config/store';


const store = configureStore().store;

// When used with server dehydrated state "ReactDOM.hydrate" should be called
const renderMethod = process.env.HYDRATE ? ReactDOM.hydrate : ReactDOM.render;

renderMethod(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
