import React, { Component } from 'react';
import LoginForm from '../ViewComponents/Public/LoginForm';
import { Redirect } from 'react-router-dom';
import FormCard from '../ViewComponents/Shared/FormCard';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.user !== "") {
            return (
                <Redirect to={{
                    pathname: "/"
                }}
                />
            );
        }

        let theme = "#456792"; //.blue
        let img = "/Images/active-blue-blurred-background-1842627.jpg";

        return (
            <FormCard img={img} title={"Välkommen tillbaka!"} theme={theme}>
                <LoginForm
                    handleSubmit={this.props.login}
                    message={this.props.message} />
            </FormCard>
        );
    }
}





