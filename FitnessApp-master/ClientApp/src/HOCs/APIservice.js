import React, { Component } from 'react';
import UserService from '../Services/UserService';

//Models
import User from '../Models/User';

var initialState = function () {

    let storeduser = window.localStorage.getItem('user');

    if (storeduser === null) {
        return "";
    }
    else {
        storeduser = JSON.parse(storeduser);
    }
    
    return new User(storeduser.id, storeduser.username, storeduser.email, storeduser.token);
}

const HOC = (WrappedComponent) => {

    class APIservice extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                user: initialState(),
                message: "",
                receiver: 0
            }

            this.receiveResponse = this.receiveResponse.bind(this);
            this.updateUserStore = this.updateUserStore.bind(this);
            this.login = this.login.bind(this);
            this.register = this.register.bind(this);
            this.logout = this.logout.bind(this);
            this.update = this.update.bind(this);
            this.delete = this.delete.bind(this);
        }

        receiveResponse(res) {

            this.updateUserStore(res);
        }

        updateUserStore(res) {

            if (res.user === "") {
                window.localStorage.clear();
            }
            else {

                window.localStorage.setItem('user', JSON.stringify(res.user));
            }

            this.setState({
                user: res.user,
                message: res.message,
                receiver: res.receiver
            });
        }

        login(email, password) {
            UserService.login(email, password, this.receiveResponse);
        }

        logout(user) {
            UserService.logout(user.id, this.receiveResponse);
        }

        register(email, password) {
            UserService.register(email, password, this.receiveResponse);
        }

        update(user) {
            UserService.update(user, this.receiveResponse);
        }

        delete(user) {
            UserService.delete(user, this.receiveResponse);
        }

        

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    user={this.state.user}
                    message={this.state.message}
                    receiver={this.state.receiver}
                    login={this.login}
                    logout={this.logout}
                    register={this.register}
                    update={this.update}
                    delete={this.delete}
                />
                );
        }
    }

    return APIservice;
}

export default HOC;