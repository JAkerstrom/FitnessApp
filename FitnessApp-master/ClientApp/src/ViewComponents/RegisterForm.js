import React from 'react';
import InputField from '../ViewComponents/InputField';
import InputButton from '../ViewComponents/InputButton';
import StyleEnums from '../Utils/StyleEnums';
import InputTypes from '../Utils/InputTypes';

//This class is almost identical to LoginForm.js, but it will contain different logic later on so
//they should probably stay as two separate classes.
export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            validemail: false,
            validpassword: false
        }

        this.addEmail = this.addEmail.bind(this);
        this.addPassword = this.addPassword.bind(this);
        this.isValid = this.isValid.bind(this);
        this.submit = this.submit.bind(this);
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

    submit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.email, this.state.password);
    }

    isValid() {
        return this.state.validemail && this.state.validpassword;
    }


    renderMessage() {
        if (this.props.message !== "") {
            return <div style={{ margin: "10px" }} className="alert alert-secondary" role="alert">
                {this.props.message}</div>;
        }
    }

    render() {

        let formStyle = {
            paddingTop: "20px"
        }

        return (
            <div className={StyleEnums.FORM_CARD_BODY}>
                <form className={StyleEnums.FORM} style={formStyle}>
                    <div className={StyleEnums.FORM_GROUP}>
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
                            placeholder={"Password.."}
                            readonly={false} />

                        {this.renderMessage()}
                       
                        <InputButton theme={StyleEnums.THEME_SUCCESS} clickHandler={this.submit} disabled={!this.isValid()} value={"Register"} />

                    </div>
                </form>
            </div>
        );
    }
}

