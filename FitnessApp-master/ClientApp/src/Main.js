import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

import changeUserState from './Redux/Actions/UserActions';
import UserService from '././Services/UserService';

//ViewComponents
import Navbar from './ViewComponents/Navbar';
import Container from './Container';
import Jumbotron from './ViewComponents/Jumbotron';

//import PropTypes from 'prop-types';

class MainConnect extends Component{

    constructor(props) {
        super(props);

        this.receiveResponse = this.receiveResponse.bind(this);
        this.login    = this.login.bind(this);
        this.register = this.register.bind(this);
        this.logout   = this.logout.bind(this);
        this.update   = this.update.bind(this);
        this.delete   = this.delete.bind(this);
    }

    receiveResponse(res) {

        this.props.changeUserState(res.user, res.message, res.receiver);
    }

    login(email, password) {
        UserService.login(email, password, this.receiveResponse);
    }

    logout(user) {
        UserService.logout(user, this.receiveResponse);
    }

    register(email, password) {
        UserService.register(email, password, this.receiveResponse);
    }

    update(user) {
        UserService.update(user, this.receiveResponse);
    }

    delete(user) {
        UserService.delete(user, this.receiveResponse);
    }
   
    render() {
        return (
            <div className="container-fluid">
                {this.props.user === "" ? <Jumbotron /> : <div></div>}
                <Navbar user={this.props.user} logout={this.logout} />                
                    <Container
                        user={this.props.user}
                        message={this.props.message}
                        receiver={this.props.receiver}
                        login={this.login}
                        register={this.register}
                        update={this.update}
                        delete={this.delete} />
            </div>
            )
    }
}

function mapStateToProps(state) {
    return { user: state.UserReducer.user };
}

function mapDispatchToProps(dispatch) {
    return {
        changeUserState: function (user, message, receiver) {
            dispatch(changeUserState(user, message, receiver))

        }
    }

}

var Main = withRouter(connect(mapStateToProps, mapDispatchToProps)(MainConnect));
export default Main;

