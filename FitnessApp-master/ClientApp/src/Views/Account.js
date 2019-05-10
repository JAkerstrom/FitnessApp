import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import EditAccount from '../ViewComponents/EditAccount';
import { Redirect } from 'react-router-dom';

const Types = {
    Password: 'password',
    Phone: 'phone',
    Email: 'email',
    Text: 'text'
}

class AccountConnect extends React.Component {

    constructor(props) {
        super(props);
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
            update={this.props.update}
            delete={this.props.delete}
            message={this.props.message}/>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

var Account = withRouter(connect(mapStateToProps)(AccountConnect));
export default Account;