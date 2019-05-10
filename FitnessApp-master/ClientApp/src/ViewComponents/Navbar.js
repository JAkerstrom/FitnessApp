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
            return [
                <React.Fragment>
                    <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-item yellow"><NavLink to="/Workouts" className="nav-link yellow">Workouts</NavLink></li>
                    <li className="nav-item purple"><NavLink to="/Food" className="nav-link purple">Food</NavLink></li>
                    <li className="nav-item red"><NavLink to="/Account" className="nav-link red">Account</NavLink></li>

                </React.Fragment>,
                <React.Fragment>
                    <li className="nav-item"><a className="nav-link" onClick={(e) => { this.logout(e) }} href="">Log out</a></li>
                </React.Fragment>
            ]
        }
        return [
            <React.Fragment>
                <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
            </React.Fragment>,
            <React.Fragment>
                <li className="nav-item green"><NavLink to="/Register" className="nav-link green">Registrera</NavLink></li>
                <li className="nav-item blue"><NavLink to="/Login" className="nav-link blue">Logga in</NavLink></li>
            </React.Fragment>
        ]
    }


    render() {
        var navBarStyle = {
            backgroundColor: "black"
        };

        let links = this.renderLinks();

        return (              
            <div className="navbar navbar-expand-lg navbar-dark" style={navBarStyle}>
                <a className="navbar-brand" href="#">FitnessApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">                        
                        { links[0] }
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        { links[1] }
                    </ul>
                </div>
            </div>
        )
    }
}