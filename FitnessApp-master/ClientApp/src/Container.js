import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

//Views
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';

import Food from './Views/Food';
import Account from './Views/Account';
import Workouts from './Views/Workouts';

import PrivateRoute from './ViewComponents/PrivateRoute';


class ContainerConnect extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let divStyle = {
            borderRadius: 0,
            padding: "0px",
            margin: "0px",
            border: "none",
            height: "100vh",
            backgroundColor: "transparent"
        }

        return (
            <div style={divStyle}>
                <Switch>
                    <Route
                        exact path="/"
                        component={Home} />

                    <Route
                        path="/register"
                        render={(props) => <Register
                        user={this.props.user}
                        register={this.props.register} />} />
                    <Route path="/login"
                        render={(props) => <Login
                        login={this.props.login}
                        user={this.props.user}/>} />
                    <PrivateRoute
                        path="/Workouts"
                        user={this.props.user}
                        component={Workouts} />
                    <PrivateRoute
                        path="/Food"
                        user={this.props.user}
                        component={Food} />
                    <PrivateRoute
                        path="/Account"
                        update={this.props.update}
                        delete={this.props.delete}
                        component={Account} />
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

var Container = withRouter(connect(mapStateToProps)(ContainerConnect));
export default Container;