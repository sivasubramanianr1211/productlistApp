import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import "bulma/css/bulma.css";
import "bulma/css/bulma.css";
import {Provider} from 'react-redux';
import configStore from './ReduxStore/Store';

ReactDOM.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
