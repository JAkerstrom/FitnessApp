import React, { Component } from 'react';

export default class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let cardStyle = {
            borderRadius: ".0rem",
            margin: "40px",
            width: "25vw"
        }

        let imgStyle = {
            width: "100%",
            height: "20vw",
            objectFit: "cover"
        }

        return (
            <div className="card float-left" style={cardStyle}>

                <img className="card-img-top" src={this.props.src} style={imgStyle}></img>

                <div className="card-body">
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}