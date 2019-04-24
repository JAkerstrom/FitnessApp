import React, { Component } from 'react';
import InputField from '../ViewComponents/InputField';
import InputButton from '../ViewComponents/InputButton';
import StyleEnums from '../Utils/StyleEnums';
import InputTypes from '../Utils/InputTypes';
import StringConstants from "../Utils/stringConstants";

export default class EditAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            copy: this.props.user.copyMe(),
            validEmailInput: true,
            validUsernameInput: true,
            statusmessage: ""
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.callback = this.callback.bind(this);
        this.doSave = this.doSave.bind(this);
        this.doDelete = this.doDelete.bind(this);
    }

    updateEmail(e, valid) {

        let updUser = this.state.copy;
        updUser.email = e;

        this.setState({
            copy: updUser,
            validEmailInput: valid
        });
    }

    updateUsername(n, valid) {

        let updUser = this.state.copy;
        updUser.username = n;

        this.setState({
            copy: updUser,
            validUsernameInput: valid
        });
    }

    callback(status) {
        if (status === StringConstants.success) {
            this.setState({
                user: this.state.copy.copyMe(),
                statusmessage: "Dina uppgifter är uppdaterade"
            });
        }
        else
        {
            this.setState({
                statusmessage: "Uppdateringen misslyckades"
            });
        }
    }

    renderMessage() {
        if (this.state.statusmessage !== "") {
            return <div style={{ margin: "10px" }} className="alert alert-secondary" role="alert">
                {this.state.statusmessage}</div>;
        } 
    }

    doSave(e) {
        e.preventDefault();
        this.props.update(this.state.copy, this.callback);
    }

    doDelete(e) {
        e.preventDefault();
        this.props.delete(this.state.user);
    }

    isValid() {
        return this.state.user.differsFrom(this.state.copy) && this.state.copy.isValid() && this.state.validEmailInput && this.state.validUsernameInput;
    }


    render() {

        let formStyle = {
            paddingTop: "20px"
        }

        return (
            <div className="col-6 col-md-offset-3 card">
                <form className="form" style={formStyle}>
                    <div className="form-group">
                        <InputField
                            inputtype={InputTypes.Email}
                            callback={this.updateEmail}
                            value={this.state.copy.email}
                            placeholder={"Email.."}
                            readonly={false} />
                        <InputField
                            inputtype={InputTypes.Text}
                            callback={this.updateUsername}
                            value={this.state.copy.username}
                            placeholder={"Username.."}
                            readonly={false} />

                        {this.renderMessage()}

                        <InputButton
                            clickHandler={this.doSave}
                            disabled={!this.isValid()}
                            theme={StyleEnums.THEME_SUCCESS}
                            value={"Save"} />

                        <InputButton
                            clickHandler={this.doDelete}
                            disabled={false}
                            theme={StyleEnums.THEME_DANGER}
                            value={"Delete Account"} />
                    </div>
                </form>
            </div>
        )
    }
}