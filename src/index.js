import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore, bindActionCreators } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import reducer from './reducer';
// import * as actions from './actions';
import { Provider } from 'react-redux';
import App from "./components/App";


const store = legacy_createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  
  </React.StrictMode>
);









