import React, { Component } from 'react';
import InputField from '../ViewComponents/InputField';
import InputButton from '../ViewComponents/InputButton';
import InputTypes from '../Utils/InputTypes';
import StringConstants from "../Utils/stringConstants";
import ViewContainer from "../ViewComponents/ViewContainer";

import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';


class EditAccountConnect extends React.Component {

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
            padding: "20px"
        }

        let red = "#e7683f";
        let grey = "#808080";
        let className = "btn btn-lg";

        return (
            <ViewContainer>
                <div className="row">
                    <div className="col-6">
                        <h3 className="text-center">Mina uppgifter</h3>
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
                            class={className}
                            value={"Spara"} />

                        <InputButton
                            clickHandler={this.doDelete}
                            disabled={false}
                            theme={red}
                            class={className}
                            value={"Radera konto"} />
                    </div>

                </div>
            </ViewContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

var EditAccount = withRouter(connect(mapStateToProps)(EditAccountConnect));
export default EditAccount;