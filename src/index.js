import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import initialState from './components/initialState';

ReactDOM.render((
  <BrowserRouter>
    <App data={initialState} />
  </BrowserRouter>
), document.getElementById('root'));
