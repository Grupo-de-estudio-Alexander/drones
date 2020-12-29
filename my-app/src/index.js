import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Direcciones from './Direcciones';

ReactDOM.render(
  <React.StrictMode>
    <Direcciones name="Manuel" drones="4" posicionInicial="0,0"/>
  </React.StrictMode>,
  document.getElementById('root')
);


