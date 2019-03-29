import React, { Component } from 'react';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';

//HOC
import HOC from './HOCs/APIservice';

//ViewComponents
import Navbar from './ViewComponents/Navbar';
import Container from './Container';
import Jumbotron from './ViewComponents/Jumbotron';

//Denna klass Wrappas med en HOC som skickar in API-metoder som props.
class Main extends Component{

    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div className="container-fluid">
                {this.props.user === "" ? <Jumbotron /> : <div></div>}
                <Navbar user={this.props.user} logout={this.props.logout} />
                <Switch>
                    <Container
                        user={this.props.user}
                        message={this.props.message}
                        receiver={this.props.receiver}
                        login={this.props.login}
                        register={this.props.register}
                        update={this.props.update}
                        delete={this.props.delete} />
                </Switch>
            </div>
            )
    }
}

export default HOC(Main);

