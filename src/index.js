import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ReactGA from "react-ga4";

ReactGA.initialize("G-1KW0X0YW2V");
ReactGA.send("pageview");



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

