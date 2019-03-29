import React, { Component } from 'react';
import LoginForm from '../ViewComponents/LoginForm';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <LoginForm
                    handleSubmit={this.props.login}
                    message={this.props.message}/>
            </div>
        );
    }
}