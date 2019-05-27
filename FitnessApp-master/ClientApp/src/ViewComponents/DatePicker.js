import React, { Component, Fragment } from 'react';

export default class DatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.change = this.change.bind(this);
    }

    change(e) {
        let value = e.target.value;
        this.props.callback(value, this.props.name);
    }

    render() {

        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input
                    value={this.props.value}
                    type={this.props.type}
                    className="form-control"
                    onChange={this.change} />
            </div>
        );

    }
}