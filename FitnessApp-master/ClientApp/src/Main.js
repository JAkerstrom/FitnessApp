import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

import changeUserState from './Redux/Actions/UserActions';
import UserService from '././Services/UserService';

//ViewComponents
import Navbar from './ViewComponents/Navbar';
import Container from './Container';
import Jumbotron from './ViewComponents/Jumbotron';
import Footer from './ViewComponents/Footer';

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
        this.props.changeUserState(res.user);
    }

    login(email, password, errorcallback) {
        UserService.login(email, password, this.receiveResponse, errorcallback);
    }

    logout(user) {
        UserService.logout(user, this.receiveResponse);
    }

    register(email, password, errorcallback) {
        UserService.register(email, password, this.receiveResponse, errorcallback);
    }

    update(user, callback) {
        UserService.update(user, this.receiveResponse, callback);
    }

    delete(user) {
        UserService.delete(user, this.receiveResponse);
    }
   
    render() {

        let containerStyle = {
            paddingRight: 0,
            paddingLeft: 0
        };

        return (
            <div className="container-fluid" style={containerStyle}>
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
                <Footer />
            </div>
            )
    }
}

function mapStateToProps(state) {
    return { user: state.UserReducer.user };
}

function mapDispatchToProps(dispatch) {
    return {
        changeUserState: function (user) {
            dispatch(changeUserState(user))

        }
    }

}

var Main = withRouter(connect(mapStateToProps, mapDispatchToProps)(MainConnect));
export default Main;

