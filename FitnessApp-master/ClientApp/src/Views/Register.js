import React from 'react';
import RegisterForm from '../ViewComponents/RegisterForm';
import { Redirect } from 'react-router-dom';


export default class Register extends React.Component {

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

        return (
            <div className="row justify-content-center">
                <RegisterForm
                    handleSubmit={this.props.register}
                    message={this.props.message} />
            </div>
        );
    }
}