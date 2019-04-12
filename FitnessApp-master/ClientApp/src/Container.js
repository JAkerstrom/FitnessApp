import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

//Views
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';

import Food from './Views/Food';
import Account from './Views/Account';
import Workouts from './Views/Workouts';

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

        if (hasUser) {
            return (
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <Route exact path="/" component={Home} />
                        <Route path="/Workouts" render={() => <Workouts user={this.props.user} />} />
                        <Route path="/Food" render={() => <Food user={this.props.user} />} />
                        <Route path="/Account" render={() =>
                            <Account user={this.props.user} />
                        }/>
                    </div>
                </div>
            )
        }
        else {
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
                    </div>
                </div>
            )
        }
    }
}

export default Container;