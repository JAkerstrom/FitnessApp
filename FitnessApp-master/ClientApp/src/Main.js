import React, {Component} from 'react';
import { Route, HashRouter } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import Navbar from './MainComponents/Navbar';
import Logout from './MainComponents/Logout';

class Main extends Component{

    constructor(props) {
        super(props);

        this.state = {
            user: ""
        }

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(e) {

        let userName = e.target[0].value;
        let serverReturn = "";
        let self = this;


        axios.post('api/auth/', {
            name: userName
        })
            .then(function (response) {
                serverReturn = response.data.name;
                self.setState({
                    user: serverReturn
                });
            })
            .catch(function (error) {
                console.log("post", error);
            });

        e.target[0].value = ""
        //e.preventDefault();
    }

    logout(e) {
        this.setState({
            user: "",
        });
    }
    
    render() {

        const hasUser = (this.props.user !== "" && this.props.user !== undefined);

        return(
            <HashRouter>
                <div className="container-fluid">
                    <Navbar />
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;