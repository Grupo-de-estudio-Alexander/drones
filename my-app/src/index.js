import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Direcciones from './Direcciones';
import App from './app';
import Grilla from './Grilla.js';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Grilla/>
  </React.StrictMode>,
  document.getElementById('root')
);


