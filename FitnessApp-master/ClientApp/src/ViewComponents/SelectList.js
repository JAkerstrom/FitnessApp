import React, { Component, Fragment } from 'react';

export default class SelectList extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.renderSelectList = this.renderSelectList.bind(this);
    }

    handleChange(event) {

        this.props.callback(event.target.value, this.props.name);
    }

    renderSelectList() {
        let selectitems = this.props.items;

        return (
            selectitems.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))
        );
    }

    render() {
        return (

            <label>
                {this.props.label}
                <select onChange={this.handleChange}>
                    {this.renderSelectList()}
                </select>
            </label>
        );
    }
}