import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import InputButton from './InputButton';

class Jumbotron extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: null
        }

        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        this.setState({ redirect: this.props.redirectPath });
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        let jumbotronStyle = {
            marginBottom: "0px",
            borderRadius: 0,
            backgroundColor: "#FFF"
        }

        let className = "btn btn-lg ml-0";
        let theme = "black";
        let btnText = "Börja nu..";

        return (
            <div className="jumbotron" style={jumbotronStyle}>
                <h1 className="display-4">Välkommen!</h1>
                <p className="lead">Detta är världen första träningsapp.</p>
                <p>Registrera dig nu eller läs mer under länkarna nedanför...</p>
                <InputButton
                    class={className}
                    clickHandler={this.redirect}
                    disabled={false}
                    theme={theme}
                    value={btnText}
                />
            </div>
        );
    }
}

export default Jumbotron;