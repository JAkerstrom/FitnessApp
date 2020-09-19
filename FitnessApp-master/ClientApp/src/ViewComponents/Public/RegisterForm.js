import React from 'react';
import InputField from '../Shared/InputField';
import InputButton from '../Shared/InputButton';
import StyleEnums from '../../Utils/StyleEnums';
import InputTypes from '../../Utils/InputTypes';


//This class is almost identical to LoginForm.js, but it will contain different logic later on so
//they should probably stay as two separate classes.
export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            validemail: false,
            validpassword: false,
            errormessage: "",
            rememberMe: false
        }

        this.addEmail = this.addEmail.bind(this);
        this.addPassword = this.addPassword.bind(this);
        this.errorCallback = this.errorCallback.bind(this);
        this.isValid = this.isValid.bind(this);
        this.submit = this.submit.bind(this);
        this.RememberMe = this.RememberMe.bind(this);
        this.toggleRememberMe = this.toggleRememberMe.bind(this);
    }

    RememberMe() {

        if (this.state.rememberMe) {

            localStorage.setItem("email", this.state.email);
            localStorage.setItem("password", this.state.password);
            localStorage.setItem("rememberMe", this.state.rememberMe);
        }
    }

    toggleRememberMe(e) {
        this.setState({ rememberMe: e.target.checked });
    }

    addEmail(e, valid) {
        this.setState({
            email: e,
            validemail: valid
        });
    }

    addPassword(p, valid) {
        this.setState({
            password: p,
            validpassword: valid
        });
    }

    errorCallback() {
        this.setState({
            errormessage: "du har angett felaktiga uppgifter"
        });
    }

    submit(e) {
        e.preventDefault();
        this.RememberMe(); 
        this.props.handleSubmit(this.state.email, this.state.password, this.errorCallback);
    }

    isValid() {
        return this.state.validemail && this.state.validpassword;
    }

    renderMessage() {
        if (this.state.errormessage !== "") {
            return <div style={{ margin: "10px" }} className="alert alert-secondary" role="alert">
                {this.state.errormessage}</div>;
        }
    }

    render() {

        let formStyle = {
            padding: "20px"
        }

        let classnames = "btn btn-lg m-0";
        let theme = "#338683";

        return (
            <div className="col-12 p-0">
                <form className="form" style={formStyle}>
                    <div className="form-group col-12 p-0">
                        <InputField
                            inputtype={InputTypes.Email}
                            callback={this.addEmail}
                            value={this.state.email}
                            placeholder={"Email.."}
                            readonly={false} />
                        <InputField
                            inputtype={InputTypes.Password}
                            callback={this.addPassword}
                            value={this.state.password}
                            placeholder={"Lösenord.."}
                            readonly={false} />

                        <div className="form-check">
                            <input type="checkbox" id="rememberMeCheck" className="form-check-input" onChange={this.toggleRememberMe} checked={this.state.rememberMe} />
                            <label className="form-check-label">Kom ihåg mig</label>
                        </div>

                        {this.renderMessage()}
                    </div>
                    <InputButton theme={theme} class={classnames} clickHandler={this.submit} disabled={!this.isValid()} value={"Registrera"} />                    
                </form>
            </div>
        );
    }
}

