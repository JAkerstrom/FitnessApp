import React from 'react';
import RegisterForm from '../ViewComponents/Public/RegisterForm';
import FormCard from '../ViewComponents/Shared/FormCard';
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
        let theme = "#338683"; //.green
        let img = "/Images/adult-architecture-athlete-221210.jpg";

        return (
            <FormCard img={img} title="Välkommen hit!" theme={theme}>
                <RegisterForm
                    handleSubmit={this.props.register}
                    message={this.props.message} />
            </FormCard>                      
        );
    }
}