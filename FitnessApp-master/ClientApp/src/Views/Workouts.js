import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

class WorkoutsConnect extends React.Component {

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

        return (
            <h1>Workouts</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

var Workouts = withRouter(connect(mapStateToProps)(WorkoutsConnect));
export default Workouts;