import React, { Component } from 'react';
import InputField from '../ViewComponents/InputField';
import InputButton from '../ViewComponents/InputButton';
import StyleEnums from '../Utils/StyleEnums';
import InputTypes from '../Utils/InputTypes';
import UserService from '../Services/UserService';

export default class EditAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            copy: this.props.user.copyMe(),
            message: "",
            validEmailInput: true,
            validUsernameInput: true
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.doSave = this.doSave.bind(this);
        this.doDelete = this.doDelete.bind(this);
        this.callback = this.callback.bind(this);
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

    renderMessage() {
        if (this.props.message !== "") {
            return <div style={{ margin: "10px" }} className="alert alert-secondary" role="alert">
                {this.props.message}</div>;
        } 
    }

    doSave(e) {
        e.preventDefault();
        UserService.update(this.state.copy, this.callback);
    }

    callback(success) {
        this.setState({
            message: success ? "Dina uppgifter är uppdaterade" : "Ett fel uppstod"
        });
    }

    doDelete(e) {
        e.preventDefault();
        UserService.delete(this.state.copy);
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