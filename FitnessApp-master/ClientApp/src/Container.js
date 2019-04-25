import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Views
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';

import Food from './Views/Food';
import Account from './Views/Account';
import Workouts from './Views/Workouts';

import PrivateRoute from './ViewComponents/PrivateRoute';


class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const hasUser = (this.props.user !== "");

        //let cardStyle = {
        //    backgroundColor: "#e9ecef",
        //    borderRadius: ".50rem",
        //    padding: "10px",
        //}

        let cardStyle = {
            backgroundImage: "url(\"/Images/equipment2.jpg\")",
            backgroundSize: "cover",
            borderRadius: 0,
            padding: "10px",
            height: "100vh"
        }

        return (
            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <Switch>
                        <Route exact path="/" component={Home} />

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
                            user={this.props.user}
                            update={this.props.update}
                            delete={this.props.delete}
                            component={Account} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Container;