import React, { Component } from 'react';

export default class InputButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let inputStyle = {
            margin: "10px",
            backgroundColor: "white",
            borderRadius: ".0rem",
            color: this.props.theme,
            borderColor: this.props.theme
        }

        return (
            <button
                className={this.props.class}
                style={inputStyle}
                onClick={(e) => { this.props.clickHandler(e) }}
                disabled={this.props.disabled}
            >{this.props.value}</button>
        );

    }
}