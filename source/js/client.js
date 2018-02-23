import 'babel-polyfill';
import 'isomorphic-fetch';
// Load CSS
import 'index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../js/views/App';

// When used with server dehydrated state "ReactDOM.hydrate" should be called
const renderMethod = process.env.HYDRATE ? ReactDOM.hydrate : ReactDOM.render;

renderMethod(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
