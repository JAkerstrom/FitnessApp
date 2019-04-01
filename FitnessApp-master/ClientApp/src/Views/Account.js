import React, { Component } from 'react';
import EditAccount from '../ViewComponents/EditAccount';
import { Redirect } from 'react-router-dom';

const Types = {
    Password: 'password',
    Phone: 'phone',
    Email: 'email',
    Text: 'text'
}

export default class Account extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user
        }

    }

    render() {

        if (this.props.user === "") {
            return (
                <Redirect to={{
                    pathname: "/"
                }}
                />
            );
        }

        return <EditAccount
            user={this.state.user}
            update={this.props.update}
            delete={this.props.delete}
            message={this.props.message}/>
    }
}