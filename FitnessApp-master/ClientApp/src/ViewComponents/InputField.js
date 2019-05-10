import React, { Component, Fragment } from 'react';
import InputTypes from '../Utils/InputTypes';
import StyleEnums from '../Utils/StyleEnums';

// InputField
// inputtype: one of Types below (mandatory)
// callback: receives the current value (optional)
// readonly: true/false (optional)
// value: initial setting (optional)

export default class InputField extends React.Component {

    constructor(props) {
        super(props);

        this.isPhone = this.isPhone.bind(this);
        this.isEmail = this.isEmail.bind(this);
        this.isName = this.isName.bind(this);
        this.validate = this.validate.bind(this);
        this.change = this.change.bind(this);
    }

    isPhone(value) {
        var regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        return value.match(regex);
    }

    isEmail(value) {
        var regex = /[a-zA-Z0-9_\+\.\%\-]{1,256}@[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9\-]{0,25})+/;
        return value.match(regex);
    }

    isName(value) {
        var regex = /^[a-öA-Ö]+(([',. -][a-öA-Ö ])?[a-öA-Ö]*)*$/;
        return value.match(regex);
    }

    validate(value) {
        let valid = false;
        if (this.props.inputtype === InputTypes.Phone) {
            if (this.isPhone(value)) {
                valid = true;
            }
        }
        else if(this.props.inputtype === InputTypes.Email) {
            if (this.isEmail(value)) {
                valid = true;
            }
        }
        else if (this.props.inputtype === InputTypes.Text) {
            if (this.isName(value)) {
                valid = true;
            }
        }
        else if (this.props.inputtype === InputTypes.Password) {
            valid = true;
        }

        return valid;
    }

    change(e) {

        let value = e.target.value;

        if (this.validate(value)) {

            this.props.callback(value, true)
        }
        else {
            this.props.callback(value, false)
        }
    }

    render() {

        let type = 'text';
        if (this.props.inputtype === InputTypes.Password) {
            type = 'password'
        }

        let placeholder = this.props.placeholder ? this.props.placeholder : "";

        if (this.props.readonly) {
            return (
                <p>{this.props.value}</p>
            );
        }
        else {
            return (

                <div className="form-group">
                    <label>{this.props.label == undefined ? "" : this.props.label}</label>
                    <input
                        className="form-control"
                        aria-describedby="helptext"
                        value={this.props.value}
                        type={type}
                        readOnly={this.props.readOnly}
                        onChange={(e) => { this.change(e) }}
                        placeholder={placeholder} />
                </div>
            );
        }
    }
}