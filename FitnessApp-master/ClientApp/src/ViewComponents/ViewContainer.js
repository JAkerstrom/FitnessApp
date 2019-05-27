import React, { Component } from 'react';

export default class ViewContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let cardStyle = {
            margin: "20px",
            borderRadius: ".0rem",
            clear: "both",
            padding: "0px",
            border: "none",
            height: "85vh",
            backgroundColor: "transparent"
        }

        return (
            <div className="card" style={cardStyle}>
                {this.props.children}
            </div>
        );
    }
}