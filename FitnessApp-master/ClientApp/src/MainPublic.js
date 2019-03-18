import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import axios from 'axios';

import Home from './MainPublicComponents/Home';
import Login from './MainPublicComponents/Login';
import Register from './MainPublicComponents/Register';
import AboutUs from './MainPublicComponents/AboutUs';
import Jumbotron from './MainPublicComponents/Jumbotron';
import NavbarPublic from './MainPublicComponents/NavbarPublic';

import RegisterResponse from './Models/RegisterResponse';
import LoginResponse from './Models/LoginResponse';
import User from './Models/User';


class MainPublic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: ""
        }

        this.login = this.login.bind(this);
        this.Register = this.Register.bind(this);
    }

    login(email, password) {

        axios.post('auth/login', {
            "Email": email,
            "Password": password,
            "ReturnUrl": "",
            "Token": ""
        })
            .then(function (res) {
                let user = new User(res.data.user.id, res.data.user.email, res.data.user.token);
                let response = new LoginResponse(user, res.data.message,
                    res.data.requestSuccess, res.data.nextUrl, res.data.returnUrl);
                console.log(response);
                //self.setState({
                //    user: user
                //});
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    Register(email, password) {
        axios.post('auth/register', {
            "Email": email,
            "Password": password,
            "ReturnUrl": "",
            "Token": ""
        })
            .then(function (res) {

                let user = new User(res.data.user.id, res.data.user.email, res.data.user.token);
                let response = new RegisterResponse(user, res.data.message,
                    res.data.requestSuccess, res.data.nextUrl, res.data.returnUrl);
                console.log(response);
                //self.setState({
                //    user: user
                //});
            })
            .catch(function (error) {
                console.log("error occured: ", error);
            });
    }

    render() {
        return (
            <HashRouter>
                <div className="container-fluid">
                    <Jumbotron />
                    <NavbarPublic />
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/aboutus" component={AboutUs} />
                        <Route path="/register" render={(props) => <Register regHandler={this.Register} />} />
                        <Route path="/login" render={(props) => <Login loginHandler={this.login} />} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default MainPublic;