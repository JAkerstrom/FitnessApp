import React, { Component } from 'react';
import ViewContainer from "../Shared/ViewContainer";
import EditAccountForm from "./EditAccountForm";

import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';


class EditAccountConnect extends React.Component {

    constructor(props) {
        super(props);
        this.renderInfoBox = this.renderInfoBox.bind(this);
    }

    renderInfoBox() {
        return (
            <div className="alert alert-warning">
                <p>Testanvändaren kan inte ändras.</p>
            </div>
        ); 
    }

    render() {

        let rowStyle = {
            marginLeft: "0px",
            marginRight: "0px",
            height: "auto"
        }

        let formStyle = {
            //marginTop: "10px",
            padding: "20px"
        };

        return (
            <ViewContainer>
                <div style={rowStyle} className="row">
                    <div style={formStyle} className="col-12 col-md-6 pull-left">
                        {this.props.user.email === "user@test.com" ? this.renderInfoBox() : ""}
                        <EditAccountForm
                            user={this.props.user}
                            update={this.props.update}
                            delete={this.props.delete}
                            message={this.props.message} 
                        />
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