import React, { Component } from 'react';
import LoginForm from '../ViewComponents/LoginForm';
import { Redirect } from 'react-router-dom';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.user !== "") {
            return (
                <Redirect to={{
                    pathname: "/"
                }}
                />
            );
        }

        return (
            <div className="row justify-content-center">
                <LoginForm
                    handleSubmit={this.props.login}
                    message={this.props.message}/>
            </div>
        );
    }
}