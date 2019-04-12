import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Workouts extends React.Component {

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