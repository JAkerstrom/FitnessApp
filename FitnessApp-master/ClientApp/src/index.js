import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

import './index.css';
import configureStore from './Redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById("root"));

