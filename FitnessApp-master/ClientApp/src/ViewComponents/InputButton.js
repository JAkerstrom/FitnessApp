import React, { Component } from 'react';

export default class InputButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let inputStyle = {
            marginTop: "10px"
        }

        return (
            <button
                className={this.props.theme}
                style={inputStyle}
                onClick={(e) => { this.props.clickHandler(e) }}
                disabled={this.props.disabled}
            >{this.props.value}</button>
        );

    }
}