import React, { Component, Fragment } from 'react';

export default class SelectList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: props.items[0]
        }

        this.handleChange = this.handleChange.bind(this);
        this.renderSelectList = this.renderSelectList.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedItem !== this.state.selectedItem) {
            this.props.callback(this.state.selectedItem, this.props.name);
        }
    }

    handleChange(event) {
        this.setState({
            selectedItem: event.target.value
        });
    }

    renderSelectList() {
        let selectitems = [{ id: 0, name: ' ', description: ' ' } , ...this.props.items];


        return (
            selectitems.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))
        );
    }

    render() {
        let styles = {
            width: "100%"
        }

        return (

            <label style={styles}>
                {this.props.label}
                <select className="form-control" onChange={this.handleChange}>
                    {this.renderSelectList()}
                </select>
            </label>
        );
    }
}