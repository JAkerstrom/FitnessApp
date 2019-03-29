import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.renderLinks = this.renderLinks.bind(this);
    }

    logout(e) {
        e.preventDefault();
        this.props.logout(this.props.user);
    }

    renderLinks() {
        if (this.props.user !== "") {
            return (
                <React.Fragment>
                    <li className="nav-item"><NavLink to="/Workouts" className="nav-link">Workouts</NavLink></li>
                    <li className="nav-item"><NavLink to="/Food" className="nav-link">Food</NavLink></li>
                    <li className="nav-item"><NavLink to="/Account" className="nav-link">Account</NavLink></li>
                    <li className="nav-item"><a className="nav-link" onClick={(e) => { this.logout(e) }} href="">Log out</a></li>
                </React.Fragment>);
            }
        return (
            <React.Fragment>
                <li className="nav-item"><NavLink to="/Register" className="nav-link">Register</NavLink></li>
                <li className="nav-item"><NavLink to="/Login" className="nav-link">Login</NavLink></li>
            </React.Fragment>);
    }


    render() {
        var navBarStyle = {
            backgroundColor: "#8cb0b0"
        };

        return (
            <div className="navbar navbar-expand-lg navbar-dark" style={navBarStyle}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                        { this.renderLinks() }
                    </ul>
                </div>
            </div>
        )
    }
}