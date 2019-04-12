import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

import './index.css';


ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.getElementById("root"));

