import React, { Component } from 'react';

import InputField from '../Shared/InputField';
import InputButton from '../Shared/InputButton';
import InputTypes from '../../Utils/InputTypes';
import StringConstants from "../../Utils/stringConstants";


export default class EditAccountForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            copy: this.props.user.copyMe(),
            validEmailInput: true,
            validUsernameInput: true,
            statusmessage: ""
        }

        this.callback = this.callback.bind(this);
        this.doSave = this.doSave.bind(this);
        this.doDelete = this.doDelete.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
    }

    callback(status) {
        if (status === StringConstants.success) {
            this.setState({
                user: this.state.copy.copyMe(),
                statusmessage: "Dina uppgifter är uppdaterade"
            });
        }
        else {
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

    render() {

        let red = "#e7683f";
        let grey = "#808080";
        let className = "btn btn-lg";

        let cardstyle = {
            height: "100%"
        }

        let formStyle = {
            minWidth: "262px",
            maxWidth: "262px"
        }

        return (
            <div className="card" style={cardstyle}>
                <div className="card-header text-center card-header-red">
                    <h3 className="text-center">Mina uppgifter</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <form className="form" style={formStyle}>
                                <InputField
                                    inputtype={InputTypes.Email}
                                    callback={this.updateEmail}
                                    value={this.state.copy.email}
                                    placeholder={"Email.."}
                                    label={"Emailadress:"}
                                    readonly={false} />
                                <InputField
                                    inputtype={InputTypes.Text}
                                    callback={this.updateUsername}
                                    value={this.state.copy.username}
                                    placeholder={"Användarnamn.."}
                                    label={"Användarnamn:"}
                                    readonly={false} />
                            </form>
                        </div>
                        <div className="col-6">
                        </div>
                        <div className="col-12 p-3 justify-content-center">
                            {this.renderMessage()}

                            <InputButton
                                clickHandler={this.doSave}
                                disabled={!this.isValid()}
                                theme={grey}
                                class={className + ' m-0'}
                                value={"Spara"} />

                            <InputButton
                                clickHandler={this.doDelete}
                                disabled={false}
                                theme={red}
                                class={className}
                                value={"Radera konto"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}