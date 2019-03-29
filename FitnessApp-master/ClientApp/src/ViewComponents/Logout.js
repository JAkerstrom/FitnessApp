import React, { Component } from 'react';

class Logout extends React.Component {
    render() {

        return (
            <form className="form-inline pull-right">
                <button className="btn btn-success" onClick={this.props.logoutHandler}>logout</button>
            </form>
        );
    }
}

export default Logout;