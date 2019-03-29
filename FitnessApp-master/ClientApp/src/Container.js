import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Views
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';

import Food from './Views/Food';
import Account from './Views/Account';
import Workouts from './Views/Workouts';

import PrivateRoute from './ViewComponents/PrivateRoute';

//utils
import MessageReceivers from './Utils/MessageReceivers';

class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const hasUser = (this.props.user !== "");

        let cardStyle = {
            backgroundColor: "#e9ecef",
            borderRadius: ".50rem",
            padding: "10px",
        }

        return (
            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <Route exact path="/" component={Home} />

                    <Route path="/register" render={(props) => <Register
                        register={this.props.register}
                        message={this.props.receiver === MessageReceivers.REGISTER ? this.props.message : ""} />} />
                    <Route path="/login" render={(props) => <Login
                        login={this.props.login}
                        message={this.props.receiver === MessageReceivers.LOGIN ? this.props.message : ""} />} />

                    <PrivateRoute path="/Workouts" user={this.props.user} component={Workouts} />
                    <PrivateRoute path="/Food" user={this.props.user} component={Food} />
                    <PrivateRoute path="/Account"
                        user={this.props.user}
                        update={this.props.update}
                        delete={this.props.delete}
                        message={this.props.receiver === MessageReceivers.UPDATE ? this.props.message : ""}
                        component={Account} />
                </div>
            </div>
        )
    }
}

export default Container;