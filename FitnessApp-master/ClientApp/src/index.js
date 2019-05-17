import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './Redux/Reducers/RootReducer';
import UserReducer from './Redux/Reducers/UserReducer';
import StateLoader from './Services/StateLoader';


const stateLoader = new StateLoader();

const store = createStore(UserReducer, stateLoader.loadState());
store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById("root"));

