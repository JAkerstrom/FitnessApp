import React from 'react';
import RegisterForm from '../ViewComponents/RegisterForm';


export default class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row justify-content-center">
                    <RegisterForm
                        handleSubmit={this.props.register}
                        message={this.props.message}/>
            </div>
        );
    }
}