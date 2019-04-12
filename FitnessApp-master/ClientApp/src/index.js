import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import ConnectedComponent from './React/ConnectedComponent';

import { Provider } from 'react-redux';
import RootReducer from './React/RootReducer';

import './index.css';

const initialstate = {
    user: ""
};
var store = createStore(RootReducer, initialstate);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedComponent/>
    </Provider>,
    document.getElementById("root"));

