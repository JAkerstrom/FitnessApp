import React from 'react';


class Register extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let email = this._email.value;
        let password = this._password.value;

        this.props.regHandler(email, password);
    }

    render() {

        let cardStyle = {
            backgroundColor: "#e9ecef",
            borderRadius: ".50rem",
            padding: "10px",
        }

        let formStyle = {
            paddingTop: "20px"
        }

        let inputStyle = {
            marginTop: "10px"
        }


        return (
            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <div className="col-6 col-md-offset-3 card">
                        <form className="form" style={formStyle}>
                            <div className="form-group">
                                <input className="form-control" ref={(data) => this._email = data} style={inputStyle} type="text" placeholder="Email.."></input>
                                <input className="form-control" ref={(data) => this._password = data} style={inputStyle} type="text" placeholder="Password.."></input>
                                <button onClick={this.handleSubmit} className="btn btn-success" style={inputStyle} type="button">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;

