import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import initialState from './components/initialState';

ReactDOM.render(<App data={initialState} />, document.getElementById('root'));
