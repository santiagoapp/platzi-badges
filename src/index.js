// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges'

// const container = document.getElementById('app');
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badges from './pages/Badges';

const container = document.getElementById('app');

ReactDOM.render(<Badges/>, container);