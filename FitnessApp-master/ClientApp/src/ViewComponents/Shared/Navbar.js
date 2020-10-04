import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }

        this.logout = this.logout.bind(this);
        this.renderLinks = this.renderLinks.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    logout(e) {
        e.preventDefault();
        this.props.logout(this.props.user);
    }

    toggleShow() {
        this.setState({ show: !this.state.show });
    }

    renderLinks() {
        if (this.props.user !== "") {
            return [
                <React.Fragment>
                    <li onClick={this.toggleShow} className="nav-item"><NavLink exact to="/" className="nav-link">Start</NavLink></li>
                    <li onClick={this.toggleShow} className="nav-item yellow"><NavLink to="/Workouts" className="nav-link yellow">Träning</NavLink></li>
                    <li onClick={this.toggleShow} className="nav-item purple"><NavLink to="/Food" className="nav-link purple">Matdagbok</NavLink></li>
                    <li onClick={this.toggleShow} className="nav-item red"><NavLink to="/Account" className="nav-link red">Mitt konto</NavLink></li>

                </React.Fragment>,
                <React.Fragment>
                    <li onClick={this.toggleShow} className="nav-item"><a className="nav-link" onClick={(e) => { this.logout(e) }} href="">Logga ut</a></li>
                </React.Fragment>
            ]
        }
        return [
            <React.Fragment>
                <li onClick={this.toggleShow} className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
            </React.Fragment>,
            <React.Fragment>
                <li onClick={this.toggleShow} className="nav-item green"><NavLink to="/Register" className="nav-link green">Registrera</NavLink></li>
                <li onClick={this.toggleShow} className="nav-item blue"><NavLink to="/Login" className="nav-link blue">Logga in</NavLink></li>
            </React.Fragment>
        ]
    }


    render() {
        var navBarStyle = {
            backgroundColor: "black"
        };

        let links = this.renderLinks();
        let navLinksUl = "";
        if (this.state.show) {
            navLinksUl =
                <div className="collapse navbar-collapse show" id="navbarNav">
                    <ul className="navbar-nav">
                        {links[0]}
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {links[1]}
                    </ul>
                </div>;
        } else {
            navLinksUl =
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {links[0]}
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {links[1]}
                    </ul>
                </div>;
        }

        return (              
            <div className="navbar navbar-expand-lg fixed-top navbar-dark" style={navBarStyle}>
                <NavLink exact to="/" className="navbar-brand">FitnessApp</NavLink>
                <button className="navbar-toggler" type="button" onClick={this.toggleShow} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                { navLinksUl }
                
            </div>
        )
    }
}