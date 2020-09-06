import React, { Component } from 'react';

export default class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let cardStyle = {
            margin: "20px",
            overflow: "hidden",
            height: "490px"
        }

        let imgStyle = {
            width: "100%",
            height: "75%",
            //height: "20vw",
            //minHeight: "200px",
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