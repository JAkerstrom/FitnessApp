import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component{

    render(){

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
                        <li className="nav-item"><NavLink to="/Stuff" className="nav-link">Stuff</NavLink></li>
                        <li className="nav-item"><NavLink to="/Contact" className="nav-link">Contact</NavLink></li>
                    </ul>
                </div>
          </div>
        )
    }
}