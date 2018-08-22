import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import appState from './store'
import registerServiceWorker from './registerServiceWorker';

console.log("This is your entire state of the application",appState.getState())

ReactDOM.render(
  <Provider store={appState}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
